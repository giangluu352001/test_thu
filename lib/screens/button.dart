import 'package:flutter/material.dart';


class DefaultButton extends StatelessWidget {
  const DefaultButton({
    Key? key,
    this.text,
    this.press,
  }) : super(key: key);
  final String? text;
  final Function? press;

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: 200,
      height: 45,
      child: TextButton(
        style: TextButton.styleFrom(
          shape:
              RoundedRectangleBorder(borderRadius: BorderRadius.circular(20)),
          primary: Colors.white,
          backgroundColor: Color(0xFF2E3D5F)//Color.fromRGBO(46, 61, 95, 1),
        ),
        onPressed: press as void Function()?,
        child: Text(
          text!,
          style: TextStyle(
            fontSize: 18,
            color: Colors.white,
          ),
        ), 
      ),
    );
  }
}