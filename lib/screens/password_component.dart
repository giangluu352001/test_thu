import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:vertical/screens/text_field.dart';

class PasswordField extends StatelessWidget {
  final ValueChanged<String> onChanged;
  const PasswordField({
    Key? key,
    required this.onChanged,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return TextFieldInputEmail(
      child: TextField(
        obscureText: true,
        onChanged: onChanged,
        cursorColor: Color(0xFF2E3D5F),
        decoration: InputDecoration(
          hintText: "Password",
          icon: Icon(
            Icons.lock,
            color: Color(0xFF2E3D5F),
          ),
          suffixIcon: Icon(
            Icons.visibility,
            color: Color(0xFF2E3D5F),
          ),
          border: InputBorder.none,
        ),
      ),
    );
  }
}