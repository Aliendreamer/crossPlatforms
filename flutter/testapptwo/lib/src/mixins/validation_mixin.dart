class ValidationMixin {
  String validatePassword(String value) {
    if (value.length < 4) {
      return "password too weak";
    }
    return null;
  }

  String validateEmail(String value) {
    if (!value.contains('@')) {
      return "Enter valid email";
    }
    return null;
  }
}
