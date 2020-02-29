using Plugin.Geolocator;
using SQLite;
using System;
using System.Linq;
using TravelRecordApp.Logic;
using TravelRecordApp.Model;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace TravelRecordApp
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class TravelPage : ContentPage
    {
        public TravelPage()
        {
            InitializeComponent();
        }

        protected override async void OnAppearing()
        {

            base.OnAppearing();
            var locator = CrossGeolocator.Current;
            var position = await locator.GetPositionAsync();
            var venues = await  VenueLogic.GetVenues(position.Latitude, position.Longitude);
            venueLisView.ItemsSource = venues;
        }

        private void ToolbarItem_Clicked(object sender, EventArgs e)
        {

            try
            {
                var selectedVenue = venueLisView.SelectedItem as Venue;

                Post post = new Post()
                {
                    Experience = expretienceEntry.Text,
                    Address = selectedVenue.location.address,
                    CategoryId = selectedVenue.categories.FirstOrDefault().id,
                    Longitude = selectedVenue.location.lng,
                    Latitude = selectedVenue.location.lat,
                    CategoryName = selectedVenue.categories.FirstOrDefault().name,
                    Distance = selectedVenue.location.distance,
                    VenueName = selectedVenue.name
                };

                using (SQLiteConnection conn = new SQLiteConnection(App.DatabaseLocation))
                {
                    conn.CreateTable<Post>();
                    int rows = conn.Insert(post);

                    if (rows > 0)
                        DisplayAlert("Success", "Experience succesfully inserted", "Ok");
                    else
                        DisplayAlert("Failure", "Experience failed to be inserted", "Ok");
                }
            }
            catch(Exception ex)
            {

            }
        }
    }
}