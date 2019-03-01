/*
Navicat MySQL Data Transfer

Source Server         : hahaha
Source Server Version : 50508
Source Host           : localhost:3306
Source Database       : jd

Target Server Type    : MYSQL
Target Server Version : 50508
File Encoding         : 65001

Date: 2019-03-01 10:47:52
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `goods`
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `sid` tinyint(4) NOT NULL AUTO_INCREMENT,
  `url` varchar(200) NOT NULL,
  `alt` varchar(9999) CHARACTER SET utf8 NOT NULL,
  `title` varchar(40) CHARACTER SET utf8 NOT NULL,
  `price` varchar(10) CHARACTER SET utf8 NOT NULL,
  `pricenum` varchar(10) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('1', '//img30.360buyimg.com/jdcms/s170x170_jfs/t13804/362/2520362292/50938/dc95de0b/5a431eb6N0db60e76.jpg!q90!cc_170x170.webp', '//img13.360buyimg.com/n1/jfs/t3166/299/1429417536/44627/c583f950/57cd2cdfN536d176e.jpg,//img13.360buyimg.com/n1/jfs/t3091/56/1459114627/42293/dd584d67/57cd2ce5N3372d6e4.jpg,//img13.360buyimg.com/n1/jfs/t3019/4/1831976983/45189/d8331327/57cd2cf6N4cb4c1c5.jpg', '金龙鱼 食用油 原料欧洲进 物理压榨 阳光葵花籽油3.618L', '￥49.90', '49.00');
INSERT INTO `goods` VALUES ('2', '//img11.360buyimg.com/jdcms/s170x170_jfs/t4681/257/55967336/565371/e9939e85/58c8e329N51e437c3.jpg!q90!cc_170x170.webp', '//img10.360buyimg.com/n1/jfs/t23893/319/2036157582/504724/773bd217/5b72d88eN0dd8ba4a.jpg,//img10.360buyimg.com/n1/jfs/t12103/206/985508631/420976/c3d18330/5a17f1d2N6cff4d0c.jpg,//img10.360buyimg.com/n1/jfs/t13975/16/957682535/583000/9cd33b39/5a17f1f1Nef159cab.jpg,//img10.360buyimg.com/n1/jfs/t13351/75/1002716932/436270/89016b4b/5a17f1f1N1737c74f.jpg,//img10.360buyimg.com/n1/jfs/t16861/127/1883263859/259678/95151ebd/5adde223Na4565dda.jpg,//img10.360buyimg.com/n1/jfs/t13858/12/979785721/224783/54207fbd/5a17f1edN91c59700.jpg,//img12.360buyimg.com/n1/jfs/t11113/265/2325524523/508634/9f3767a9/5a1844f4Nf293b105.jpg,//img12.360buyimg.com/n1/jfs/t12214/269/973820050/560210/59b611c1/5a17f473N6e592ec1.jpg', '地毯 满铺人造草坪  塑料草皮仿真人造草坪幼儿园楼顶阳台人工假草皮假草皮 ', '￥15.00', '15.00');
INSERT INTO `goods` VALUES ('3', '//img11.360buyimg.com/jdcms/s170x170_jfs/t3757/35/648491863/260975/89fcc74/5810134dNa57803e5.jpg!q90!cc_170x170.webp', '//img11.360buyimg.com/n1/jfs/t12949/259/459947317/144318/136f0b79/5a2a5948N4ac8c3a0.jpg,//img11.360buyimg.com/n1/jfs/t12985/121/1793611302/161098/1443e3d2/5a2a5953N21d9adaa.jpg,//img11.360buyimg.com/n1/jfs/t15832/150/205477056/145564/45d2b340/5a2a595aN06d0fcda.jpg,//img11.360buyimg.com/n1/jfs/t13549/307/438848355/150684/e4a8a598/5a2a595aNc303a664.jpg,//img11.360buyimg.com/n1/jfs/t15673/331/167588307/146278/6b327525/5a2a593bN3e5e11ce.jpg', '瑞士军刀单肩包男包斜挎包单肩包手提包韩版潮男包单肩包休闲帆布 黑色', '￥99.00', '99.00');
INSERT INTO `goods` VALUES ('4', '//img14.360buyimg.com/jdcms/s170x170_jfs/t6988/292/1969815422/452190/1fc6de7e/5987d460N5f967422.jpg!q90!cc_170x170.webp', '//img10.360buyimg.com/n1/jfs/t19774/192/1133399344/428808/7d6febca/5abb6b5bN151761c1.jpg,//img10.360buyimg.com/n1/jfs/t7075/35/331659100/428942/8d0f6daf/597ef80cN847dc5ed.jpg,//img10.360buyimg.com/n1/jfs/t6805/87/1247344340/136770/423fa178/597ef810N98208bb8.jpg,//img10.360buyimg.com/n1/jfs/t6082/294/7540513111/461118/693d655e/597ef811N88e0cc1f.jpg', '小米电视4A L32M5-AZ 32英寸 1GB+4GB 四核64位处理器 高清', '￥1199.00', '119.00');
INSERT INTO `goods` VALUES ('5', '//img12.360buyimg.com/jdcms/s170x170_jfs/t4537/123/3510459553/112899/519bc627/58feb3e0Nd64f11f3.jpg!q90!cc_170x170.webp', '//img13.360buyimg.com/n1/jfs/t1/119/18/11273/74838/5bcd65c4E230d9279/01c78d613e673803.jpg,//img13.360buyimg.com/n1/jfs/t1/3949/25/11060/94648/5bcd65c5E21b28ad7/93a88218c77b4ab2.jpg,//img13.360buyimg.com/n1/jfs/t1/843/26/11291/242929/5bcd65c4E30834429/f1583b12c48fc282.jpg,//img13.360buyimg.com/n1/jfs/t1/121/18/11371/103735/5bcd65c5Ebc8da1c5/a995c8a15c033a06.jpg,//img13.360buyimg.com/n1/jfs/t1/5557/31/11005/86230/5bcd65c5Ec81765c5/541e47fd3125c1f0.jpg', '五粮液52度普五 500ML（新老包装随机发货）', '￥1078.00', '1078.00');
INSERT INTO `goods` VALUES ('6', '//img12.360buyimg.com/jdcms/s340x340_jfs/t1/28479/23/7491/165895/5c6cbe86Eae0ddc26/32bffc1316f58462.jpg!q90!cc_170x170.webp', '//img12.360buyimg.com/n1/jfs/t1/28483/22/1545/133678/5c138655Ecf12a6f3/abfeff6aa2239c15.jpg,//img12.360buyimg.com/n1/jfs/t1/28479/23/7491/165895/5c6cbe86Eae0ddc26/32bffc1316f58462.jpg,//img12.360buyimg.com/n1/jfs/t1/10474/14/5676/160889/5c1999f9E8ec61df3/1352f47b9aac8814.jpg,//img12.360buyimg.com/n1/jfs/t28846/90/501011109/128142/b9e02642/5bf53e6eNea895995.jpg,//img12.360buyimg.com/n1/jfs/t1/28477/16/2096/128383/5c199a03Eef8b3e50/91fa4b9252d82bdc.jpg,//img12.360buyimg.com/n1/jfs/t1/29022/38/2121/134026/5c199a0fE2c2b87e5/391db8c9d0e19ff1.jpg,//img12.360buyimg.com/n1/jfs/t1/8646/22/3652/146960/5bd82558E8bdb5567/5f9687bb53c8642f.jpg,//img12.360buyimg.com/n1/jfs/t26173/94/2471551036/107338/326035dc/5c03a9caN09394783.jpg', '领舞 柏集堂美白祛斑霜 男女士去晒斑雀斑遗传斑老年斑黑斑产品淡化黑色素去黄护肤化', '￥136.00', '136.00');
INSERT INTO `goods` VALUES ('7', '//img13.360buyimg.com/jdcms/s340x340_jfs/t25027/280/2682853746/164733/cfeedd97/5bebd44bN030a2a5b.jpg!q90!cc_170x170.webp', '//img14.360buyimg.com/n1/jfs/t1/7876/27/14078/99184/5c516241Ebf6518c4/377b0a757490c237.jpg,//img14.360buyimg.com/n1/jfs/t1/15394/6/6443/94594/5c516238E8c9efd5b/cf51fc92e8ca693e.jpg,//img14.360buyimg.com/n1/jfs/t1/31237/3/1545/226923/5c516231E5551d3cf/235a13861f742108.jpg,//img14.360buyimg.com/n1/jfs/t1/26258/12/6407/87318/5c51620fE7f4fb8fd/d188dae63e317092.jpg,//img14.360buyimg.com/n1/jfs/t1/23543/13/6464/117321/5c516214E6388ff4c/d1be1e1223aaf489.jpg', '四叶草镀925银手链男女款情侣一对红绳脚链手环手镯学生韩版简约手环时尚手饰品 圣', '￥39.00', '39.00');
INSERT INTO `goods` VALUES ('8', '//img14.360buyimg.com/jdcms/s340x340_jfs/t1/5119/35/9537/262958/5bacd3f8E95a7285a/f5f4c1d16450f9b2.jpg!q90!cc_170x170.webp', '//img12.360buyimg.com/n1/jfs/t1/5119/35/9537/262958/5bacd3f8E95a7285a/f5f4c1d16450f9b2.jpg,//img12.360buyimg.com/n1/jfs/t1/6386/1/130/297637/5bacd3f8Ee4005522/b3df5a66b1d610f6.jpg,//img12.360buyimg.com/n1/jfs/t1/3565/35/9602/316240/5bacd3f8E9d3a865e/fbe4139cad78d89f.jpg,//img12.360buyimg.com/n1/jfs/t1/985/8/9646/278868/5bacd3f7Ead7a8856/14689eaa3e451e76.jpg,//img12.360buyimg.com/n1/jfs/t1/145/24/9712/290785/5bacd3f7E3ca3587a/460481c8f07123dc.jpg,//img12.360buyimg.com/n1/jfs/t1/110/3/9839/616877/5bacd4c4Ec6aa9cf1/85c1a6c069272588.png,//img12.360buyimg.com/n1/jfs/t1/830/14/9626/355939/5bacd4d2E649cfe7a/e5b03830598d877b.png,//img12.360buyimg.com/n1/jfs/t1/4420/35/9603/461696/5bacd52cE71de6199/fb6c7f9d14e9dc31.png', '搭韩版休闲女鞋厚底港风街拍板鞋 红色 36', '￥29.90', '29.90');
INSERT INTO `goods` VALUES ('9', '//img20.360buyimg.com/jdcms/s300x300_jfs/t1/19031/11/5693/278441/5c4168e2E01d6f6b9/210f5a2d0d604166.jpg!q90!cc_170x170.webp', '//img11.360buyimg.com/n1/jfs/t1/19031/11/5693/278441/5c4168e2E01d6f6b9/210f5a2d0d604166.jpg,//img11.360buyimg.com/n1/jfs/t24844/142/484732282/433410/4ab54374/5b7175f9Nab425e1d.jpg,//img11.360buyimg.com/n1/jfs/t25294/311/478345224/450004/d49829d2/5b7175faN2e837b5a.jpg,//img11.360buyimg.com/n1/jfs/t25804/105/502982058/307032/a7161605/5b7175f8N7d6f86f3.jpg,//img11.360buyimg.com/n1/jfs/t25930/109/471215160/386357/76438ff2/5b7175f9N582611dd.jpg,//img11.360buyimg.com/n1/jfs/t24067/20/2015875383/360171/6746f32d/5b7175fbN62a468e1.jpg,//img11.360buyimg.com/n1/jfs/t10984/344/2121442383/370801/89cddf6c/59efeb2dNfebfe94c.jpg,//img11.360buyimg.com/n1/jfs/t8455/273/2287391969/270338/cdcb7158/59c9c4cbN24a7cf56.jpg', '苏泊尔（SUPOR）电压力锅 智能触控 球釜双胆 开盖收汁 一键排压 SY-50', '￥358.00', '358.00');
INSERT INTO `goods` VALUES ('10', '//img12.360buyimg.com/jdcms/s340x340_jfs/t1/22833/14/8240/305078/5c741240E2fef0049/70065e91fec0187c.jpg!q90!cc_170x170.webp', '//img10.360buyimg.com/n1/jfs/t1/22833/14/8240/305078/5c741240E2fef0049/70065e91fec0187c.jpg,//img10.360buyimg.com/n1/jfs/t1/5031/39/2350/393250/5b962fc8E35ea4d6e/7b0b6fc0c54ef357.jpg,//img10.360buyimg.com/n1/jfs/t1/2383/19/2251/370255/5b962fd2Ee8e559dd/cf3f4ca14126203f.jpg,//img10.360buyimg.com/n1/jfs/t19090/274/1538711842/184034/382591a4/5acdb3b7N495170c3.jpg', '满300减180三只松鼠 夏威夷果160g 零食坚果炒货孕妇坚果每日坚果干果休闲', '￥35.90', '35.90');

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `sid` tinyint(3) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(20) CHARACTER SET utf8 NOT NULL,
  `password` varchar(40) CHARACTER SET utf8 NOT NULL,
  `email` varchar(40) CHARACTER SET utf8mb4 NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('3', 'dsfadsfdag', 'e10adc3949ba59abbe56e057f20f883e', '123456@qq.com');
INSERT INTO `user` VALUES ('4', 'dsfad', 'e10adc3949ba59abbe56e057f20f883e', '123456@qq.com');
INSERT INTO `user` VALUES ('18', 'asdwasdw', 'b904a0024ca491b03625e9e1f66b4751', 'asdwasdw');
INSERT INTO `user` VALUES ('21', 'asdw123123', '6f28726feca39d03e184f828d4efd419', 'asdw123123');
INSERT INTO `user` VALUES ('22', 'asdw123', '7eb20693a253e2ab56d184dca013003e', 'asdw123');
INSERT INTO `user` VALUES ('23', 'asdw1234', '63151f717c68a75d3ed51e9ed4271841', 'asdw1234');
