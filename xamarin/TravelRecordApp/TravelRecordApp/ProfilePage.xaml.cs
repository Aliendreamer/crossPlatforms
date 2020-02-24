using SQLite;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TravelRecordApp.Model;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;
using System.Linq;

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
                var orderedList = postTable.Distinct().OrderBy(x => x.CategoryName);
                var categoriesCount = postTable.GroupBy(x => x.CategoryName).ToDictionary(x=>x.Key, x=>x.Key.Count()); //new Dictionary<string, int>();

            }
        }
    }
}