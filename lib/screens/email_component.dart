import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:vertical/screens/text_field.dart';

class EmailInputField extends StatelessWidget {
  final String hintText;
  final IconData icon;
  final ValueChanged<String> onChanged;
  const EmailInputField({
    Key? key,
    required this.hintText,
    this.icon = Icons.person,
    required this.onChanged,
  }) : super(key: key);

  @override 
  Widget build(BuildContext context) {
    return TextFieldInputEmail(
      child: TextField(
        onChanged: onChanged,
        cursorColor:  Color(0xFF2E3D5F),
        decoration: InputDecoration(
          
          icon: Icon(icon, color: Color(0xFF2E3D5F),),
          hintText: hintText,
          hintStyle: TextStyle(color: Color(0xFF2E3D5F)),
          border: InputBorder.none,
        ),
      ),
    );
  }
}