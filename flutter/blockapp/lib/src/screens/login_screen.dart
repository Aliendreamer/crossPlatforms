import 'package:flutter/material.dart';
import '../blocs/provider.dart';
import '../blocs/bloc.dart';

class LoginScreen extends StatelessWidget {
  Widget build(context) {
    final bloc = Provider.of(context);
    return Container(
      margin: EdgeInsets.all(20.0),
      child: Column(
        children: [
          emailField(bloc),
          passwordField(bloc),
          Container(
            margin: EdgeInsets.only(top: 25.0),
          ),
          submitButton(bloc),
        ],
      ),
    );
  }

  Widget emailField(Block block) {
    return StreamBuilder(
      stream: block.email,
      initialData: "",
      builder: (context, snapshot) {
        return TextField(
          keyboardType: TextInputType.emailAddress,
          decoration: InputDecoration(
            hintText: "you@mail.com",
            labelText: "Email address",
            errorText: snapshot.error,
          ),
          onChanged: block.changeMail,
        );
      },
    );
  }

  Widget passwordField(Block block) {
    return StreamBuilder(
      stream: block.password,
      initialData: "",
      builder: (context, snapshot) {
        return TextField(
          obscureText: true,
          keyboardType: TextInputType.visiblePassword,
          decoration: InputDecoration(
            hintText: "password",
            labelText: "password",
            errorText: snapshot.error,
          ),
          onChanged: block.changePassword,
        );
      },
    );
  }

  Widget submitButton(Block block) {
    return StreamBuilder(
      stream: block.submitValid,
      builder: (context, snapshot) {
        return ElevatedButton(
          onPressed: !snapshot.hasData ? null : block.submit,
          autofocus: false,
          style: ButtonStyle(backgroundColor:
              MaterialStateProperty.resolveWith<Color>(
                  (Set<MaterialState> states) {
            if (states.contains(MaterialState.pressed)) return Colors.red;
            return Colors.blue; // Use the component's default.
          })),
          child: Text("login"),
        );
      },
    );
  }
}
