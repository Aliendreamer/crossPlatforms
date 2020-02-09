using SQLite;

namespace TravelRecordApp.Model
{
    public class Post
    {
        [PrimaryKey,AutoIncrement]
        public int Id { get; set; }

        public string Experience { get; set; }
    }
}
