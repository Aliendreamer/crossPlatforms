using System.Collections.Generic;

namespace TravelRecordApp.Model
{
    public class Venue
    {
        public string id { get; set; }
        public string name { get; set; }
        public Location location { get; set; }
        public IList<Category> categories { get; set; }

    }
}
