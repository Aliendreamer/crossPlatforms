import 'dart:html';
import 'dart:ui' as ui;
import 'package:flutter/material.dart';
import '../models/image_model.dart';
import './iframe_widget.dart';

class ImageList extends StatelessWidget {
  const ImageList(this.images, {Key? key}) : super(key: key);
  final List<ImageModel> images;

  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      itemCount: images.length,
      itemBuilder: (BuildContext context, int index) {
        return buildImage(images[index]);
      },
    );
  }

  Widget buildImage(ImageModel image) {
    return Container(
        decoration: BoxDecoration(
          border: Border.all(color: Colors.grey),
        ),
        margin: const EdgeInsets.all(20.0),
        padding: const EdgeInsets.all(20.0),
        child: Column(
          children: <Widget>[
            Padding(
              child: Text(image.url),
              padding: const EdgeInsets.only(bottom: 10.0),
            ),
            Text(image.title),
          ],
        ));
  }
}
