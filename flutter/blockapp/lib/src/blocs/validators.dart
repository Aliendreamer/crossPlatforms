import "dart:async";

class Validators {
  final validateEmail = StreamTransformer<String, String>.fromHandlers(
      handleData: (email, sink) async {
    if (email.contains('@')) {
      sink.add(email);
    } else {
      sink.addError("Enter valid mail");
    }
  });

  final validatePassword = StreamTransformer<String, String>.fromHandlers(
      handleData: (password, sink) async {
    if (password.length > 3) {
      sink.add(password);
    } else {
      sink.addError("Enter valid password");
    }
  });
}
