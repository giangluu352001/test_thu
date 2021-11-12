class UserLogin {
  String username;
  String password;
  String? avatar;
  UserLogin({required this.username,required this.password, this.avatar});

  Map <String, dynamic> toDatabaseJson() => {
    "username": this.username,
    "password": this.password,
    "avatar": this.avatar
  };
}

class Token{
  String token;

  Token({required this.token});

  factory Token.fromJson(Map<String, dynamic> json) {
    return Token(
      token: json['token']
    );
  }
}