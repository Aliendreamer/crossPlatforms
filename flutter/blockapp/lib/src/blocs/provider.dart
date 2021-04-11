import "package:flutter/material.dart";
import 'bloc.dart';

class Provider extends InheritedWidget {
  final block = Block();
  Provider({Key key, Widget child}) : super(key: key, child: child);
  @override
  bool updateShouldNotify(covariant InheritedWidget oldWidget) {
    // TODO: implement updateShouldNotify
    return true;
  }

  static Block of(BuildContext context) =>
      context.dependOnInheritedWidgetOfExactType<Provider>().block;
}
