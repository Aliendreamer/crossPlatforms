import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart';
import 'models/image_model.dart';
import 'widgets/image_list.dart';

class App extends StatefulWidget {
  const App({Key? key}) : super(key: key);
  @override
  State<StatefulWidget> createState() {
    return AppState();
  }
}

class AppState extends State<App> {
  int counter = 0;
  List<ImageModel> images = <ImageModel>[];
  final Text title = const Text('let see some images!');
  Future<void> fetchImage() async {
    counter++;
    final Uri path =
        Uri.https('jsonplaceholder.typicode.com', 'photos/$counter');
    final Response response = await get(path);
    final dynamic parsedJson = json.decode(response.body);
    final ImageModel imageModel =
        ImageModel.fromJson(parsedJson as Map<String, dynamic>);
    setState(() {
      images.add(imageModel);
    });
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        body: ImageList(images),
        floatingActionButton: FloatingActionButton(
            child: const Icon(Icons.add), onPressed: fetchImage),
        appBar: AppBar(
          title: title,
        ),
      ),
    );
  }
}
