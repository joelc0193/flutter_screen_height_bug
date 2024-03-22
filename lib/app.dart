import 'package:flutter/material.dart';

void run() async {
  runApp(HomePage());
}

class HomePage extends StatefulWidget {
  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        body: Container(
          decoration: BoxDecoration(
            color: Colors.blue,
            border: Border.all(
              color: Colors.red,
              width: 8.0,
            ),
          ),
          child: Center(
            child: Text('${MediaQuery.sizeOf(context).height}'),
          ),
        ),
      ),
    );
  }
}
