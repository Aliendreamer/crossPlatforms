import 'dart:convert';
import 'package:http/http.dart' show Client;
import '../models//item_mode.dart';

final _rootUrl = 'https://hacker-news.firebaseio.com/v0';

class NewsApiProvider {
  Client client = Client();
  final topStoriesUrl = Uri.parse('$_rootUrl/topstories.json');

  Future<List<int>> fetchTopIds() async {
    final response = await client.get(this.topStoriesUrl);
    final ids = json.decode(response.body);
    return ids;
  }

  fetchItem(int id) async {
    final singleStoryUrl = Uri.parse('$_rootUrl/v0/item/$id.json');
    final response = await client.get(singleStoryUrl);
    final articleData = json.decode(response.body);
    return ItemModel.fromJson(articleData as Map<String, dynamic>);
  }
}
