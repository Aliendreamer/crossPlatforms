
using Plugin.Geolocator;
using Plugin.Geolocator.Abstractions;
using Plugin.Permissions;
using Plugin.Permissions.Abstractions;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using TravelRecordApp.Model;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace TravelRecordApp
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class MapPage : ContentPage
    {
        private bool hasLocationPermission = false;
        public MapPage()
        {
            InitializeComponent();
        }
        protected override async void OnAppearing()
        {
            base.OnAppearing();
            await GetLocationPermission();
            if (hasLocationPermission)
            {
                var locator = CrossGeolocator.Current;
                locator.PositionChanged += Locator_PositionChanged;
                await locator.StartListeningAsync(TimeSpan.Zero,100,true);
            }
                await GetLocation();
         
        }

        private void DisplayInMap(List<Post> posts)
        {
            foreach (var post in posts)
            {
                try
                {
                    var position = new Xamarin.Forms.Maps.Position(post.Latitude, post.Longitude);
                    var pin = new Xamarin.Forms.Maps.Pin
                    {
                        Type = Xamarin.Forms.Maps.PinType.SavedPin,
                        Position = position,
                        Label = post.VenueName,
                        Address = post.Address
                    };
                    locationsMap.Pins.Add(pin);
                }catch(Exception ex)
                {

                }

            }
        }

        protected override void OnDisappearing()
        {
            CrossGeolocator.Current.StopListeningAsync();
            CrossGeolocator.Current.PositionChanged -= Locator_PositionChanged;
            base.OnDisappearing();
        }
        private void Locator_PositionChanged(object sender, PositionEventArgs e)
        {
            MoveMap(e.Position);
        }

        private void MoveMap(Position position)
        {
            var center = new Xamarin.Forms.Maps.Position(position.Latitude, position.Longitude);
            var span = new Xamarin.Forms.Maps.MapSpan(center, 1, 1);
            locationsMap.MoveToRegion(span);
        }

        private async Task GetLocation()
        {
            if(hasLocationPermission)
            {
                var locator = CrossGeolocator.Current;
                var position = await locator.GetPositionAsync();
                MoveMap(position);
            }
        }

        private async Task GetLocationPermission()
        {
            try
            {
                var status = await CrossPermissions.Current.CheckPermissionStatusAsync(Permission.LocationWhenInUse);
                if (status != PermissionStatus.Granted)
                {
                    if (await CrossPermissions.Current.ShouldShowRequestPermissionRationaleAsync(Permission.Location))
                    {
                        await DisplayAlert("Need location", "Gunna need that location", "OK");
                    }
                    var results =await CrossPermissions.Current.RequestPermissionsAsync(Permission.LocationWhenInUse);
                    bool hasPermission = results.TryGetValue(Permission.LocationWhenInUse,out PermissionStatus locationPermission);
                    status = hasPermission  ? locationPermission : PermissionStatus.Denied;
                }

                if (status == PermissionStatus.Granted)
                {
                    locationsMap.IsShowingUser = true;
                    hasLocationPermission = true;
                    await GetLocation();
                }
                else if (status != PermissionStatus.Granted)
                {
                    locationsMap.IsShowingUser = false;
                    await DisplayAlert("Error showing location", "we cant display position we need permssion", "OK");
                }
            }
            catch (Exception ex)
            {
               await  DisplayAlert("on agree", " try again later","Ok");
            }
        }
    }
}