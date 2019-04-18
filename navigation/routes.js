import HomeScreen from '../screens/HomeScreen';
import BaoCaoScreen from '../screens/BaoCao';
import StationStats from '../screens/BaoCao/StationStats';
import UserStatsGeneral
  from '../screens/BaoCao/UserDetailedStats/UserStatsGeneral';
import UserStatsInteraction
  from '../screens/BaoCao/UserDetailedStats/UserStatsInteractions';
import SettingDetailScreen from '../screens/SettingDetail';
import SettingsScreen from '../screens/SettingsScreen';
import DetailScreen from '../screens/DetailScreen';
import QuanTracScreen from '../screens/QuanTracScreen';
import SettingsCameraScreen from '../screens/Settings/SettingsCameraScreen';
import QuanTracListScreen from '../screens/QuanTrac/Lists/StationsListScreen';
import QuanTracDetailScreen
  from '../screens/QuanTrac/Details/StationsDetailScreen';
import WarningInfoListScreen
  from '../screens/QuanTrac/Lists/WarningInfoListScreen';
import WarningInfoDetailScreen
  from '../screens/QuanTrac/Details/WarningInfoDetailScreen';
import FloodLevelsListScreen
  from '../screens/QuanTrac/Lists/FloodLevelsListScreen';
import FloodLevelsDetailScreen
  from '../screens/QuanTrac/Details/FloodLevelsDetailScreen';
import ForecastInfo from '../screens/ForecastInfo';
import StormNewsAndInfoTab
  from '../screens/NewsAndInfo/Tabs/StormNewsAndInfoTab';
import StormNewsAndInfoDetail
  from '../screens/NewsAndInfo/Details/StormNewsAndInfoDetail';
import CalamityNewsAndInfoTab
  from '../screens/NewsAndInfo/Tabs/CalamityNewsAndInfoTab';
import CalamityNewsAndInfoDetail
  from '../screens/NewsAndInfo/Details/CalamityNewsAndInfoDetail';


export default [
    {name:'Home', screen: HomeScreen},
    {name:'Báo Cáo', screen: BaoCaoScreen},
    {name:'Thông tin Bão', screen: StormNewsAndInfoTab},
    {name:'Thông tin Thiên Tai', screen: CalamityNewsAndInfoTab},
]