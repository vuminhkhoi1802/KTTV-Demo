# Khí Tượng Thủy Văn Mobile Application
Đây là ứng dụng mobile chạy trên nền tảng Android và iOS của cục Khí Tượng Thủy Văn 

## Nền tảng sử dụng
1. Android
2. iOS


## Hướng dẫn cài đặt môi trường và chạy thử app
## Android/Windows PC

1. Cài đặt [NodeJS Package Manager - npm](https://nodejs.org/dist/v10.15.3/node-v10.15.3.pkg)

1.1 Cài đặt [Java JDK 8.0](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)

1.2 Add đường dẫn sau vào Environment Variable như hình

```
C:\Program Files\Java\jdk1.8.0_191
```
![Capture](/uploads/4ff3a223f83e09042bbcc47ff725ffab/Capture.PNG)

1.3 Add đường dẫn sau vào Path như hình

```
C:\Program Files\Java\jdk1.8.0_191\bin
```
![tempsnip3](/uploads/420dd865e74796e78b7e9d3066e06fc7/tempsnip3.png)
2. Cài đặt [Expo-CLI](http://facebook.github.io/react-native/docs/getting-started): Mở GitBash hoặc CMD hoặc Terminal (Mac OSX) chạy command line bên dưới
```
$ npm install -g expo-cli

```
3. Cài đặt [Android Studio](https://developer.android.com/studio) (Windows/Mac OSX): Install và chuyển sang bước 4

4. Cài đặt thiết bị giả lập Android [Android Emulator - AVD](https://docs.expo.io/versions/latest/workflow/android-studio-emulator/), nếu người dùng sử dụng MacOSX thì cài XCode và iOS Simulator

4.1 Chạy Android Simulator sau khi đã cài đặt -> Ở Android Simulator Click vào biểu tượng AVD Manager như trong hình
![tempsnip](/uploads/81171fb039a6c5f448a908ffcd1bdc6f/tempsnip.png)
4.2 Tạo 1 thiết bị giả lập theo các bước sau

4.2.1 Chọn "Create Virtual Device"
![tempsnip1](/uploads/583f0e842d0922cd6a5b32d848349bba/tempsnip1.png)

4.2.2 Chọn bất cứ device nào rồi click vào Next. Ở trong hình ta chọn 
![tempsnip2](/uploads/6e4284d25e24a6242c9e7a40a511eb96/tempsnip2.png)

4.2.3 Chọn 1 ROM của Android, ở đây ta chọn Android Pie như trong hình. Nếu chưa có sẵn ROM, click vào nút 'Download' ở bên cạnh tên ROM, còn nếu đã có sẵn, ta chọn ROM đó và click Next.

![Capture2](/uploads/ea3face193b61550111df1c87a6e9ac0/Capture2.PNG)

4.2.4 Không cần tùy chọn gì hết, tuy nhiên nên đổi tên của giả lập thành tên nối liền nhau các ký tự, ví dụ: "MyDevice0x', x ở đây là số từ 1->bao nhiêu tùy chọn. Sau đó click Finish
![Capture3](/uploads/598dae06de9ba2d28d0a2437b5b07676/Capture3.PNG)

4.3 Khi ta quay lại màn hình AVD Manager, thì ta sẽ thấy đã có thiết bị giả lập ở trong danh sách. Click vào nút tam giác màu xanh lá ở cột Actions để chạy thiết bị giả lập Android
![tempsnip4](/uploads/fce44fbcefd49bf02fe791e0e769cd18/tempsnip4.png)

5 Sau khi chạy giả lập của bước 4, thì chạy câu lệnh sau ở 1 cửa sổ git bash/cmd/Terminal bất kỳ
``` 
$ git clone git@gitlab.com:hoanht.dd/kttv-mobile.git && cd ktttv-mobile && git checkout development 
```
6. Chạy câu lệnh: 
``` 
$ npm install && expo start 

```
7. Ở trang localhost:1900x trong trình duyệt, đợi đến khi hiển thị dòng chữ 'Tunnel Ready' thì chọn 'Run on Android device/emulator' (cho máy Android) hoặc 'Run on iOS simulator' (cho hệ điều hành Mac OSX)

8. Để chạy trên thiết bị thật (iPhone/Android Devices), thì sẽ chạy như sau
``` 
Android: Tải App Expo Client trên PlayStore -> Chạy App Expo -> Vào Tab Profile -> Login với thông tin như sau: Username: vuminhkhoi1802, Password: Trang19082008! Lúc đó ở Mục Profile sẽ hiện ra Mục Published Projects -> Chọn Project kttv-mobileV5.0x, (ở đây hãy chọn x cao nhất để có bản cập nhật mới nhất)

```
```
- Khi build expo trên máy Windows PC thì làm theo các bước như trên với Android đối với các thiết bị chạy iOS
```

## iOS/MAC OSX

1. Cài đặt [Node JS Package Manager (npm)](https://nodejs.org/dist/v10.15.3/node-v10.15.3.pkg)

2. Cài đặt XCode: Vào Mac OSX App Store -> Search XCode -> Chọn Install

3. Launch XCode từ Application LaunchPad hoặc từ thư mục Application -> Xcode

3.1 Ở XCode Click vào Xcode ở góc trái trên cùng màn hình -> Chọn Preferences... -> Chọn vào Components như cửa sổ dưới đây

![image](/uploads/d1be85dc208757ef5628d18aa6292b26/image.png)

3.2 Chọn bất cứ hệ điều hành iOS nào cần test -> Chọn Check and Install now như trong hình trên -> Thoát XCode

4. Mở Terminal, cài đặt React Native Command Line Interface (CLI) bằng câu lệnh sau:

```
$ sudo npm install -g react-native-cli
```

5. Cài đặt Expo Command Line Interface (CLIT) bằng câu lệnh sau:

```
$ sudo npm install -g expo-cli
```
6. Clone Project ở trên gitlab bằng 1 trong 2 cách sau trong ở Terminal.

```
$ git clone git@gitlab.com:hoanht.dd/kttv-mobile.git
```

hoặc

```
$ git clone https://gitlab.com/hoanht.dd/kttv-mobile.git
```
sau đó điền tên username và password của GitLab

Sau đó chạy 

```
$ cd kttv-mobile && sudo npm install && sudo expo start
```
Máy sẽ launch vào Expo Dev Tool ở trình duyệt dưới dạng đường link: http://localhost:19002

7. Ở trang localhost:19002 trong trình duyệt, đợi đến khi hiển thị dòng chữ 'Tunnel Ready' thì chọn 'Run on iOS simulator' (cho hệ điều hành Mac OSX) -> Máy sẽ tự động launch iOS Simulator sau khi đã cài đặt ở trên và load vào app. Thời gian đợi có thể lâu phụ thuộc vào cấu hình máy Mac OSX đang sử dụng. 

8. - Khi build expo trên máy Mac thì làm theo các thao tác dưới đây để chaỵ trên thiết bị thật
iOS: Tải App Expo Client trên AppStore -> Vào Camera App rồi chĩa vào mã QR trên trang localhost:1900x, máy sẽ prompt người dùng chuyển sang app expo để launch 




