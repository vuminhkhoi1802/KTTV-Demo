import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import {
  View,
  Text,
  Image,
  Dimensions,
} from 'react-native';
import { AppColors } from '@app/config';

export default class DetailScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title', 'Tin chi tiết'),
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.title}>Bản tin dự báo thời tiết ngày 08/03 trên cả nước </Text>
          <Text style={styles.created_at}>Ngày 8/3 00:00:00 AM</Text>
          <Text style={styles.content}>
            Áp thấp nhiệt đới những ngày qua vẫn đang di chuyển lệch theo hướng Tây Tây Bắc với tốc độ 15-20km/h. 
            {"\n"}{"\n"}
            Sáng sớm nay, áp thấp nhiệt đới còn cách Côn Đảo khoảng 200km với sức gió mạnh cấp 6-7, giật cấp 9. 
            {"\n"}{"\n"}
            Dự báo khoảng tối nay, vị trí tâm áp thấp nhiệt đới ở vào khoảng 8,4 độ Vĩ Bắc; 105,3 độ Kinh Đông, nằm trên vùng biển Bến Tre - Cà Mau. 
            {"\n"}{"\n"}
            Sức gió mạnh nhất ở vùng gần tâm mạnh cấp 6-7 (40-60km/giờ), giật cấp 9.
          </Text>
          <Image
            source={{ uri: "http://a8.vietbao.vn/images/vn888/hot/v2014/best_8ba42211a5-1-thoi-tiet-1-11-bao-noi-ap-thap-vao-bien-dong-kha-nang-xuat-hien-voi-rong.jpeg" }}
            style={styles.img}
          />
          <Text style={styles.content}>
            Do ảnh hưởng của áp thấp nhiệt đới kết hợp với không khí lạnh, ở vùng biển Tây Nam quần đảo Trường Sa, vùng biển từ Bình Thuận đến Cà Mau (bao gồm các huyện đảo Phú Quý, Côn Đảo) có mưa rào và dông kèm khả năng lốc xoáy, vòi rồng; gió mạnh cấp 6-7, giật cấp 9, sóng biển cao từ 2-4m; biển động mạnh. 
            {"\n"}{"\n"}
            Từ chiều và đêm nay các tỉnh Bến Tre, Trà Vinh, Sóc Trăng, Bạc Liêu, Cà Mau, Kiên Giang có gió giật mạnh cấp 6-7. 
            {"\n"}{"\n"}
            Các tỉnh ven biển các tỉnh Nam Bộ cần đề phòng nước dâng kết hợp với triều cường cao từ 4-4,5m. 
            {"\n"}{"\n"}
            Ảnh hưởng hoàn lưu áp thấp nhiệt đới nay đến hết ngày mai, ở Nam Bộ có mưa vừa, mưa to, có nơi mưa rất to với tổng lượng mưa cả đợt phổ biến 100-150mm, có nơi trên 200mm.
          </Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.primary,
    flex: 1,
    padding: 10,
  },
  title: {
    color: AppColors.black,
    fontSize: 40,
    fontWeight: 'bold',
  },
  created_at: {
    marginTop: 10,
    color: AppColors.grey,
    fontSize: 15,
  },
  content: {
    marginTop: 15,
    color: AppColors.black,
    fontSize: 22,
  },
  img: {
    width: Dimensions.get('window').width - 30,
    height: 200,
  },
  backBtn: {
    color: AppColors.button,
    backgroundColor: AppColors.buttonText,
  }
});
