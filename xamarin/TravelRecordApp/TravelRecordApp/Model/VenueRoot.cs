using System;
using TravelRecordApp.Helpers;

namespace TravelRecordApp.Model
{
    public class VenueRoot
    {


        public Response response { get; set; }
         
        public static string GetVenueUrl(double latitude,double longtitude)
        {
            return string.Format(Constants.VENUES_URL, 
                                 latitude, 
                                 longtitude,
                                 AppSettingsManager.Settings[Constants.FORSQUARE_CLIENT_ID],
                                 AppSettingsManager.Settings[Constants.FORSQUARE_CLIENT_SECRET],
                                 DateTime.UtcNow.ToString("yyyyMMdd"));
        }
    }
}
