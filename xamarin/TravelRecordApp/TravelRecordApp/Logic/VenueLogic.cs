using System;
namespace TravelRecordApp.Logic
{
    using Newtonsoft.Json;
    using System.Collections.Generic;
    using System.Net.Http;
    using System.Threading.Tasks;
    using TravelRecordApp.Model;

    public class VenueLogic
    {
        public async static Task<List<Venue>> GetVenues(double latitude, double longtitude)
        {
            List<Venue> venues;
            var url = VenueRoot.GetVenueUrl(latitude, longtitude);
            using (HttpClient client = new HttpClient())
            {
                var response =  await client.GetAsync(url);
                var json = await  response.Content.ReadAsStringAsync();
                var venueRoot = JsonConvert.DeserializeObject<VenueRoot>(json);
                venues =new List<Venue>(venueRoot.response.venues);
            }
            return venues;
        }
    }
}
