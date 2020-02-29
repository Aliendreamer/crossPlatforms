using SQLite;
using System.Linq;
using TravelRecordApp.Model;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace TravelRecordApp
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class ProfilePage : ContentPage
    {
        public ProfilePage()
        {
            InitializeComponent();
        }

        protected override void OnAppearing()
        {
            base.OnAppearing();
            using(var connection =  new SQLiteConnection(App.DatabaseLocation))
            {
                var postTable = connection.Table<Post>().ToList();
                postCountLabel.Text = postTable.Count.ToString();
                var orderedList = postTable.Where(x=>x.CategoryName != null).Distinct().OrderBy(x => x.CategoryName).ToList();
                var categoriesCount = orderedList.GroupBy(x => x.CategoryName).ToDictionary(x=>x.Key, x=>x.ToList().Count());
                categoriesListView.ItemsSource = categoriesCount;
            }
        }
    }
}