import { Box, Button, Chip, Divider, FormControl, FormControlLabel, FormGroup, FormHelperText, Stack, Switch, TextField, ToggleButton, Tooltip, Typography } from "@mui/material";
import ExtensionOutlinedIcon from '@mui/icons-material/ExtensionOutlined';
import ExtensionOffOutlinedIcon from '@mui/icons-material/ExtensionOffOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import React, { useEffect, useState } from "react";
import ModulesDialog from '../dialogs/modules';
import BargashtiDialog from "../dialogs/bargashti";
import KhadamatDialog from "../dialogs/khadamat";
import { GeneralState } from '../context/generalContext';
import 'jalaali-react-date-picker/lib/styles/index.css';
import moment from 'moment-jalaali';
import 'moment/locale/fa';
import 'moment-jalaali';
const { ipcRenderer } = window.require('electron');



const EntrySection = () => {
    const appCodes = { '11': 'فروشگاهی ساده', '12': 'فروشگاهی متوسط', '13': 'فروشگاهی پیشرفته', '15': 'فروشگاهی پیشرفته ۲ کاربره', '21': 'شرکتی ساده', '22': 'شرکتی متوسط', '23': 'شرکتی پیشرفته', '24': 'شرکتی ویژه', '25': 'شرکتی پیشرفته ۲ کاربره', '31': 'تولیدی ساده', '32': 'تولیدی متوسط', '33': 'تولیدی پیشرفته', '35': 'تولیدی پیشرفته ۲ کاربره', '41': 'جامع', '42': 'صنعتی', '44': 'شبکه', '81453': 'الکترونیک', '84955': 'رستوران و کترینگ', '84957': 'رستوران و کترینگ پيشرفته ', '84941': 'رستوران و کترینگ جامع', '84944': 'رستوران و کترینگ شبکه', '84055': 'طباخان', '84057': 'طباخان پیشرفته', '84041': 'طباخان جامع', '84044': 'طباخان شبکه', '82855': 'اغذیه فروشان و مواد غذایی', '82857': 'اغذیه فروشان و مواد غذایی پیشرفته', '82841': 'اغذیه فروشان و مواد غذایی جامع', '82844': 'اغذیه فروشان و مواد غذایی شبکه', '81111': 'نرم افزار مدیریت آرایشگاه', '81113': 'نرم افزار مدیریت آرایشگاه پیشرفته', '81133': 'نرم افزار مدیریت آرایشگاه حرفه ای', '81141': 'نرم افزار مدیریت آرایشگاه جامع', '81144': 'نرم افزار مدیریت آرایشگاه شبکه 44', '81211': 'نرم افزار عینک', '81213': 'نرم افزار عینک پیشرفته', '81241': 'نرم افزار عینک جامع', '81244': 'نرم افزار عینک شبکه', '81321': 'پخش ساده(فروش ندارد)', '81322': 'پخش متوسط (فروش ندارد)', '81323': 'پخش پیشرفته (فروش ندارد)', '81341': 'پخش جامع (فروش ندارد)', '81344': 'پخش شبکه (فروش ندارد)', '81346': 'مدیریت پخش', '81348': 'مدیریت پخش + GPS', '81347': 'مدیریت پخش (شبکه)', '81349': 'مدیریت پخش (شبکه) + GPS', '85012': 'فروش مانتو و پوشاک', '85033': 'فروش مانتو و پوشاک - پیشرفته', '85041': 'مانتو و پوشاک - جامع', '85044': 'مانتو و پوشاک - شبکه', '81812': 'سوپرمارکت', '81813': 'سوپرمارکت پیشرفته', '81841': 'سوپرمارکت جامع', '81844': 'سوپرمارکت شبکه', '81932': 'قنادی و آجیل فروشی', '81933': 'قنادی و آجیل فروشی پیشرفته', '81941': 'قنادی و آجیل فروشی جامع', '81944': 'قنادی و آجیل فروشی شبکه', '82012': 'لوازم یدکی', '82013': 'لوازم یدکی پیشرفته', '82041': 'لوازم یدکی جامع', '82044': 'لوازم یدکی شبکه', '82112': 'نرم افزار آرایشی و بهداشتی', '82113': 'لوازم آرایشی و بهداشتی پیشرفته', '82141': 'لوازم آرایشی و بهداشتی جامع', '82144': 'لوازم آرایشی و بهداشتی شبکه', '82212': 'فراورده های پروتئینی', '82241': 'فراورده های پروتئینی جامع', '82244': 'فراورده های پروتئینی شبکه', '82247': 'اتوماسیون تخصصی فراورده های پروتئینی', '83112': 'لوازم خانگی و صوتی تصویری', '83113': 'لوازم خانگی و صوتی تصویری پیشرفته', '83141': 'لوازم خانگی و صوتی تصویری جامع', '83144': 'لوازم خانگی و صوتی تصویری شبکه', '82412': 'بازرگانی پارچه و پرده', '82413': 'بازرگانی پارچه و پرده پیشرفته', '82441': 'بازرگانی پارچه و پرده جامع', '82444': 'بازرگانی پارچه و پرده شبکه', '82712': 'رنگ و ابزار فروشی', '82713': 'رنگ و ابزار فروشی - پبشرفته', '82741': 'رنگ و ابزار فروشی - جامع', '82744': 'رنگ و ابزار فروشی - شبکه', '20132': 'کامپیوتر، موبایل و ماشین های اداری', '20133': 'کامپیوتر، موبایل و ماشین های اداری - پیشرفته', '20141': 'کامپیوتر، موبایل و ماشین های اداری - جامع', '20144': 'کامپیوتر، موبایل و ماشین های اداری - شبکه', '82912': 'باطری فروشان', '82913': 'باطری فروشان پیشرفته', '82941': 'باطری فروشان جامع', '82944': 'باطری فروشان شبکه', '83012': 'فروشندگان کالای خواب', '83013': 'فروشندگان کالای خواب پیشرفته', '83041': 'فروشندگان کالای خواب جامع', '83044': 'فروشندگان کالای خواب شبکه', '83212': 'لوازم ایمنی و آتش نشانی', '83241': 'لوازم ایمنی و آتش نشانی جامع', '83244': 'لوازم ایمنی و آتش نشانی شبکه', '83311': 'فتوکپی و اوزالید', '83313': 'فتوکپی و اوزالید پیشرفته', '83341': 'فتوکپی و اوزالید جامع', '83344': 'فتوکپی و اوزالید شبکه', '83412': 'فروشندگان مواد شیمیایی', '83413': 'فروشندگان مواد شیمیایی پیشرفته', '83441': 'فروشندگان مواد شیمیایی جامع', '83444': 'فروشندگان مواد شیمیایی شبکه', '83611': 'لوازم پزشکی، آزمایشگاهی و دندانپزشکی', '83612': 'لوازم پزشکی، آزمایشگاهی و دندانپزشکی پیشرفته', '83613': 'لوازم پزشکی، آزمایشگاهی و دندانپزشکی حرفه ای', '83641': 'لوازم پزشکی، آزمایشگاهی و دندانپزشکی جامع', '83644': 'لوازم پزشکی، آزمایشگاهی و دندانپزشکی شبکه', '84112': 'فرش ماشینی و موکت', '84113': 'فرش ماشینی و موکت پیشرفته', '84141': 'فرش ماشینی و موکت جامع ', '84144': 'فرش ماشینی و موکت شبکه', '84212': 'فروشندگان لاستیک', '84241': 'فروشندگان لاستیک جامع', '84244': 'فروشندگان لاستیک شبکه', '20412': 'لوازم بهداشتی و مصالح ساختمانی', '20433': 'لوازم بهداشتی و مصالح ساختمانی - پیشرفته', '20441': 'لوازم بهداشتی و مصالح ساختمانی - جامع', '20444': 'لوازم بهداشتی و مصالح ساختمانی - شبکه', '84412': 'شوفاژ و تهویه مطبوع', '84413': 'شوفاژ و تهویه مطبوع پیشرفته', '84441': 'شوفاژ و تهویه مطبوع جامع', '84444': 'شوفاژ و تهویه مطبوع شبکه', '84512': 'فروشندگان ساعت', '84513': 'فروشندگان ساعت پیشرفته', '84541': 'فروشندگان ساعت جامع', '84544': 'فروشندگان ساعت شبکه', '84811': 'خرازی', '84813': 'خرازی پیشرفته', '84841': 'خرازی جامع', '84844': 'خرازی شبکه', '20032': 'خدمات پس از فروش', '20033': 'خدمات پس از فروش پیشرفته', '20041': 'خدمات پس از فروش جامع', '20044': 'خدمات پس از  فروش شبکه', '20512': 'آهن فروشی', '20533': 'آهن فروشی - پیشرفته', '20541': 'آهن فروشی جامع ', '20544': 'آهن فروشی شبکه ', '20612': 'کیف و کفش', '20633': 'کیف و کفش - پیشرفته', '20641': 'کیف و کفش - جامع ', '20644': 'کیف و کفش - شبکه', '20722': 'کارواش', '20741': 'کارواش - جامع', '20744': 'کارواش - شبکه ', '31065': 'طلا و جواهر', '31085': 'طلا و جواهر پیشرفته', '31087': 'طلافروشی جامع', '31089': 'طلا فروشی شبکه', '21212': 'کاشی و سرامیک', '21241': 'کاشی و سرامیک جامع', '21244': 'کاشی و سرامیک شبکه ', '21313': 'میوه و تره بار', '21341': 'میوه و تره بار - جامع', '21344': 'میوه و تره بار - شبکه ', '21712': 'سنگ بری و سنگ فروشی', '21733': 'سنگ بری و سنگ فروشی - پیشرفته', '21741': 'سنگ بری و سنگ فروشی - جامع', '21744': 'سنگ بری و سنگ فروشی - شبکه', '21831': 'شیشه بری', '21833': 'شیشه بری - پیشرفته', '21841': 'شیشه بری - جامع', '21844': 'شیشه بری - شبکه', '21912': 'لوازم التحریر و کمک آموزشی', '21933': 'لوازم التحریر و کمک آموزشی - پیشرفته', '21941': 'لوازم التحریر و کمک آموزشی - جامع', '21944': 'لوازم التحریر و کمک آموزشی - شبکه', '22012': 'اجاره کالا', '22033': 'اجاره کالا - پیشرفته', '22041': 'اجاره کالا - جامع', '22044': 'اجاره کالا - شبکه', '22223': 'صرافی', '22233': 'صرافی پیشرفته', '22241': 'صرافی جامع', '22244': 'صرافی شبکه', '22532': 'دباغی', '22533': 'دباغی - پیشرفته', '22541': 'دباغی - جامع', '22544': 'دباغی - شبکه', '85311': 'املاک ساده', '85312': 'املاک متوسط', '85313': 'املاک پیشرفته', '85341': 'املاک جامع', '85344': 'املاک شبکه', '85632': 'فروش چوب و MDF', '85633': 'فروش چوب و MDF پیشرفته', '85641': 'فروش چوب و MDF جامع', '85644': 'فروش چوب و MDF شبکه', '85723': 'نمایندگی بیمه', '85741': 'نمایندگی بیمه جامع', '85744': 'نمایندگی بیمه شبکه', '85841': 'ضایعات و اوراقی', '85844': 'ضایعات و اوراقی', '1366': 'فودکورت', '10175': 'شرکتهای بازرگانی', '10177': 'شرکتهای بازرگانی جامع', '10179': 'شرکتهای بازرگانی شبکه', '10285': 'شرکتهای تولیدی', '10287': 'شرکتهای تولیدی جامع', '10289': 'شرکتهای تولیدی شبکه', '10485': 'شرکت های پیمانکاری', '10487': 'شرکت های پیمانکاری جامع', '10489': 'شرکت های پیمانکاری شبکه', '86233': 'نرم افزار تخصصی کلینیک زیبایی - پایه', '86241': 'نرم افزار تخصصی کلینیک زیبایی - جامع', '86244': 'نرم افزار  تخصصی مدیریت مطب  شبکه', '86323': 'نرم افزار تخصصی مدیریت مطب پایه', '86341': 'نرم افزار  تخصصی مدیریت مطب جامع', '86141': 'پنل  تخصصی اماکن ورزشی - سینگل', '86144': 'پنل  تخصصی اماکن ورزشی - شبکه', '85431': 'پنل تخصصی اتو سرویس', '85432': 'پنل تخصصی اتو سرویس متوسط', '85433': 'پنل تخصصی اتو سرویس پیشرفته', '85441': 'پنل تخصصی اتو سرویس جامع', '85444': 'پنل تخصصی اتو سرویس شبکه', '86055': 'کافه رستوران', '86057': 'کافه رستوران پیشرفته', '86041': 'کافه رستوران جامع', '86044': 'کافه رستوران شبکه ', '86047': 'نرم افزار تخصصی کافه رستوران', '85932': 'نان و فرآورده های غلات ', '85933': 'نان و فرآورده های غلات پیشرفته', '85941': 'نان و فرآورده های غلات جامع', '85944': 'نان و فرآورده های غلات  شبکه', '85947': 'اتوماسیون تخصصی نان و فرآورده های غلات', '81947': 'اتوماسیون تخصصی قنادی و آجیل فروشی', '84947': 'اتوماسیون تخصصی رستوران اندروید' }
    const appPrices = { '11': '37800000', '12': '68100000', '13': '130800000', '15': '348200000', '21': '43600000', '22': '74700000', '23': '136200000', '24': '272500000', '25': '314900000', '31': '60600000', '32': '116100000', '33': '156400000', '35': '413800000', '41': '353200000', '42': '706400000', '44': '997500000', '81453': '121200000', '84955': '37400000', '84957': '121200000', '84941': '272500000', '84944': '605600000', '84055': '37400000', '84057': '121200000', '84041': '272500000', '84044': '605600000', '82855': '27300000', '82857': '83800000', '82841': '232200000', '82844': '545000000', '81111': '25300000', '81113': '72700000', '81133': '212000000', '81141': '454200000', '81144': '928500000', '81211': '25300000', '81213': '96900000', '81241': '272500000', '81244': '686300000', '81321': '70700000', '81322': '169600000', '81323': '343200000', '81341': '545000000', '81344': '1009200000', '81346': '302800000', '81348': '524800000', '81347': '726700000', '81349': '1816600000', '85012': '70700000', '85033': '145400000', '85041': '393600000', '85044': '726700000', '81812': '55600000', '81813': '129200000', '81841': '312900000', '81844': '605600000', '81932': '70700000', '81933': '177700000', '81941': '363400000', '81944': '756900000', '82012': '31300000', '82013': '97900000', '82041': '272500000', '82044': '605600000', '82112': '61600000', '82113': '133300000', '82141': '252300000', '82144': '585400000', '82212': '80800000', '82241': '323000000', '82244': '656000000', '82247': '989000000', '83112': '50500000', '83113': '145400000', '83141': '272500000', '83144': '605600000', '82412': '36400000', '82413': '126200000', '82441': '282600000', '82444': '605600000', '82712': '31300000', '82713': '116100000', '82741': '232200000', '82744': '454200000', '20132': '72700000', '20133': '185700000', '20141': '333100000', '20144': '676200000', '82912': '26300000', '82913': '118100000', '82941': '267500000', '82944': '555100000', '83012': '33400000', '83013': '113100000', '83041': '312900000', '83044': '585400000', '83212': '37400000', '83241': '262400000', '83244': '605600000', '83311': '32300000', '83313': '128200000', '83341': '282600000', '83344': '555100000', '83412': '56600000', '83413': '177700000', '83441': '434000000', '83444': '797300000', '83611': '30300000', '83612': '89900000', '83613': '201900000', '83641': '363400000', '83644': '1090000000', '84112': '45500000', '84113': '121200000', '84141': '312900000', '84144': '656000000', '84212': '106000000', '84241': '323000000', '84244': '706500000', '20412': '33400000', '20433': '137300000', '20441': '222100000', '20444': '605600000', '84412': '45500000', '84413': '161500000', '84441': '312900000', '84444': '605600000', '84512': '57600000', '84513': '177700000', '84541': '343200000', '84544': '686300000', '84811': '42400000', '84813': '105000000', '84841': '312900000', '84844': '686300000', '20032': '70700000', '20033': '201900000', '20041': '343200000', '20044': '656000000', '20512': '70700000', '20533': '212000000', '20541': '484500000', '20544': '1453300000', '20612': '30300000', '20633': '121200000', '20641': '201900000', '20644': '575300000', '20722': '64600000', '20741': '199900000', '20744': '464300000', '31065': '121200000', '31085': '343200000', '31087': '706500000', '31089': '1312000000', '21212': '52500000', '21241': '232200000', '21244': '524800000', '21313': '65600000', '21341': '190800000', '21344': '343200000', '21712': '45500000', '21733': '161500000', '21741': '312900000', '21744': '605600000', '21831': '42400000', '21833': '161500000', '21841': '312900000', '21844': '605600000', '21912': '47500000', '21933': '140300000', '21941': '272500000', '21944': '545000000', '22012': '32300000', '22033': '126200000', '22041': '302800000', '22044': '524800000', '22223': '121200000', '22233': '302800000', '22241': '484500000', '22244': '1160600000', '22532': '60600000', '22533': '212000000', '22541': '343200000', '22544': '656000000', '85311': '32300000', '85312': '153400000', '85313': '312900000', '85341': '434000000', '85344': '867900000', '85632': '65600000', '85633': '185700000', '85641': '292700000', '85644': '676200000', '85723': '80800000', '85741': '393600000', '85744': '827600000', '85841': '726700000', '85844': '1160600000', '1366': '989000000', '10175': '353300000', '10177': '1009200000', '10179': '1513800000', '10285': '524800000', '10287': '1130300000', '10289': '1766100000', '10485': '635800000', '10487': '1332200000', '10489': '1967900000', '86233': '252300000', '86241': '999100000', '86244': '968900000', '86323': '181700000', '86341': '555100000', '86141': '323000000', '86144': '797300000', '85431': '121200000', '85432': '252300000', '85433': '565200000', '85441': '867900000', '85444': '1312000000', '86055': '37400000', '86057': '121200000', '86041': '272500000', '86044': '605600000', '86047': '847800000', '85932': '70700000', '85933': '177700000', '85941': '363400000', '85944': '756900000', '85947': '1438100000', '81947': '1438100000', '84947': '847800000' }
    const networkCodes = ['25', '35', '44', '15', '25', '35', '84944', '84044', '82844', '81144', '81244', '81344', '81349', '81347', '85044', '81844', '81944', '82044', '82144', '82244', '83144', '82444', '82744', '20144', '82944', '83044', '83244', '83344', '83444', '83644', '84144', '84244', '20444', '84444', '84544', '84844', '2044', '20544', '20644', '20744', '31089', '21244', '21344', '21744', '21844', '21944', '22044', '22244', '22544', '85344', '85644', '85744', '85844', '10179', '10289', '10489', '86244', '86144', '85444', '86044', '85944']
    const tamdidPrices = { '11': '13250000', '12': '23800000', '13': '45700000', '15': '121500000', '21': '15250000', '22': '26100000', '23': '47500000', '24': '95200000', '25': '110000000', '31': '21200000', '32': '40500000', '33': '54700000', '35': '144800000', '41': '123500000', '42': '247000000', '44': '349000000', '81453': '42400000', '84955': '13200000', '84957': '42400000', '84941': '95900000', '84944': '215000000', '84055': '13200000', '84057': '42400000', '84041': '94900000', '84044': '215000000', '82855': '9600000', '82857': '29300000', '82841': '81800000', '82844': '190800000', '81111': '9100000', '81113': '25300000', '81133': '74200000', '81141': '158500000', '81144': '329000000', '81211': '9100000', '81213': '33900000', '81241': '95900000', '81244': '238200000', '81321': '25300000', '81322': '59600000', '81323': '120100000', '81341': '190800000', '81344': '357300000', '81346': '106000000', '81348': '183700000', '81347': '254400000', '81349': '635800000', '85012': '25300000', '85033': '51500000', '85041': '137300000', '85044': '254400000', '81812': '19200000', '81813': '45500000', '81841': '109000000', '81844': '215000000', '81932': '25300000', '81933': '62100000', '81941': '127200000', '81944': '264500000', '82012': '11200000', '82013': '34400000', '82041': '95900000', '82044': '215000000', '82112': '21200000', '82113': '46500000', '82141': '88400000', '82144': '199900000', '82212': '28300000', '82241': '113100000', '82244': '229100000', '82247': '346200000', '83112': '17700000', '83113': '51500000', '83141': '95900000', '83144': '215000000', '82412': '12700000', '82413': '43900000', '82441': '98900000', '82444': '215000000', '82712': '11200000', '82713': '40400000', '82741': '81800000', '82744': '158500000', '20132': '25300000', '20133': '64600000', '20141': '116100000', '20144': '236200000', '82912': '9100000', '82913': '40400000', '82941': '93900000', '82944': '193800000', '83012': '11700000', '83013': '39400000', '83041': '109000000', '83044': '199900000', '83212': '13200000', '83241': '91900000', '83244': '215000000', '83311': '11200000', '83313': '44500000', '83341': '98900000', '83344': '193800000', '83412': '19700000', '83413': '62100000', '83441': '153400000', '83444': '278600000', '83611': '10600000', '83612': '31300000', '83613': '70700000', '83641': '127200000', '83644': '381500000', '84112': '15900000', '84113': '42400000', '84141': '109000000', '84144': '229100000', '84212': '36900000', '84241': '113100000', '84244': '248300000', '20412': '11700000', '20433': '48000000', '20441': '77800000', '20444': '215000000', '84412': '15900000', '84413': '56600000', '84441': '109000000', '84444': '215000000', '84512': '19700000', '84513': '62100000', '84541': '120100000', '84544': '240200000', '84811': '14700000', '84813': '36900000', '84841': '109000000', '84844': '240200000', '20032': '25300000', '20033': '70700000', '20041': '120100000', '20044': '229100000', '20512': '25300000', '20533': '74200000', '20541': '169600000', '20544': '516700000', '20612': '10600000', '20633': '42400000', '20641': '70700000', '20644': '196800000', '20722': '22800000', '20741': '69700000', '20744': '162500000', '31065': '42400000', '31085': '120100000', '31087': '248300000', '31089': '464300000', '21212': '18200000', '21241': '81800000', '21244': '183700000', '21313': '22800000', '21341': '65600000', '21344': '120100000', '21712': '15900000', '21733': '56600000', '21741': '109000000', '21744': '215000000', '21831': '14700000', '21833': '56600000', '21841': '109000000', '21844': '215000000', '21912': '16700000', '21933': '49000000', '21941': '95900000', '21944': '190800000', '22012': '11200000', '22033': '43900000', '22041': '106000000', '22044': '183700000', '22223': '42400000', '22233': '106000000', '22241': '169600000', '22244': '415800000', '22532': '21200000', '22533': '74200000', '22541': '120100000', '22544': '229100000', '85311': '11200000', '85312': '53500000', '85313': '109000000', '85341': '153400000', '85344': '312900000', '85632': '22800000', '85633': '65600000', '85641': '98900000', '85644': '236200000', '85723': '28300000', '85741': '137300000', '85744': '289700000', '85841': '254400000', '85844': '401700000', '1366': '346200000', '10175': '123200000', '10177': '350200000', '10179': '529900000', '10285': '183700000', '10287': '395600000', '10289': '617700000', '10485': '225100000', '10487': '466300000', '10489': '691300000', '86233': '88400000', '86241': '349200000', '86244': '643900000', '86323': '63600000', '86341': '193800000', '86141': '113100000', '86144': '278600000', '85431': '42400000', '85432': '88400000', '85433': '197800000', '85441': '300800000', '85444': '459200000', '86055': '13200000', '86057': '42400000', '86041': '95900000', '86044': '212000000', '86047': '292700000', '85932': '25300000', '85933': '61600000', '85941': '127200000', '85944': '262400000', '85947': '494500000', '81947': '494500000', '84947': '292700000' }

    const { originCode, setOriginCode,
        destCode, setDestCode,
        upgradeDifference, setUpgradeDifference,
        originChandSherkati, setOriginChandSherkati,
        destChandSherkati, setDestChandSherkati,
        originChandSherkatiPrice, setOriginChandSherkatiPrice,
        destChandSherkatiPrice, setDestChandSherkatiPrice,
        tamdidDate, setTamdidDate,
        tamdidMotevali, setTamdidMotevali,
        karbaeEzafePrice, setKarbarEzafePrice,
        chandSherkati, setChandSherkati,
        tabdilBeGhofl, setTabdilBeGhofl,
        modules, setModules,
        bargashti, setBargashti,
        khadamat, setKhadamat,
        saleTakhfif, setSaleTakhfif,
        tamdidTakhfif, setTamdidTakhfif,
        karbarEzafeTakhfif, setKarbarEzafeTakhfif,
        chandSherkatiTakhfif, setChandSherkatiTakhfif,
        tabdilBeGhoflTakhfif, setTabdilBeGhoflTakhfif,
        modulesTakhfif, setModulesTakhfif,
        bargashtiTakhfif, setBargashtiTakhfif,
        khadamatTakhfif, setKhadamatTakhfif,
        originPrice, setOriginPrice,
        destPrice, setDestPrice,
        tamdidPrice, setTamdidPrice,
        tashvighiPrice, setTashvighiPrice,
        motevaliPrice, setMotevaliPrice,
        chandSherkatiPrice, setChandSherkatiPrice,
        tabdilBeGhoflPrice, setTabdilBeGhoflPrice,
        modulesPrice, setModulesPrice,
        bargashtiPrice, setBargashtiPrice,
        khadamatPrice, setKhadamatPrice,
        resultsOpen, setResultsOpen,
        originAfterTakhfif, setOriginAfterTakhfif,
        destAfterTakhfif, setDestAfterTakhfif,
        upgradeAfterTakhfif, setUpgradeAfterTakhfif,
        tamdidAfterTakhfif, setTamdidAfterTakhfif,
        karbarEzafeAfterTakhfif, setKarbarEzafeAfterTakhfif,
        chandSherkatiAfterTakhfif, setChandSherkatiAfterTakhfif,
        tabdilBeGhoflAfterTakhfif, setTabdilBeGhoflAfterTakhfif,
        modulesAfterTakhfif, setModulesAfterTakhfif,
        bargashtiAfterTakhfif, setBargashtiAfterTakhfif,
        khadamatAfterTakhfif, setKhadamatAfterTakhfif,
        originAfterTakhfifErr, setOriginAfterTakhfifErr,
        destAfterTakhfifErr, setDestAfterTakhfifErr,
        upgradeAfterTakhfifErr, setUpgradeAfterTakhfifErr,
        tamdidAfterTakhfifErr, setTamdidAfterTakhfifErr,
        karbarEzafeAfterTakhfifErr, setKarbarEzafeAfterTakhfifErr,
        chandSherkatiAfterTakhfifErr, setChandSherkatiAfterTakhfifErr,
        tabdilBeGhoflAfterTakhfifErr, setTabdilBeGhoflAfterTakhfifErr,
        modulesAfterTakhfifErr, setModulesAfterTakhfifErr,
        bargashtiAfterTakhfifErr, setBargashtiAfterTakhfifErr,
        khadamatAfterTakhfifErr, setKhadamatAfterTakhfifErr,
        jameKol, setJameKol,
        jameKolAfterTakhfif, setJameKolAfterTakhfif,
        calc, setCalc,
        resetState, setResetState,
        originPriceBefore, setOriginPriceBefore,
        destPriceBefore, setDestPriceBefore,
        upgradeDifferenceBefore, setUpgradeDifferenceBefore,
        tamdidPriceBefore, setTamdidPriceBefore,
        tashvighiPriceBefore, setTashvighiPriceBefore,
        motevaliPriceBefore, setMotevaliPriceBefore,
        karbaeEzafePriceBefore, setKarbarEzafePriceBefore,
        chandSherkatiPriceBefore, setChandSherkatiPriceBefore,
        tabdilBeGhoflPriceBefore, setTabdilBeGhoflPriceBefore,
        modulesPriceBefore, setModulesPriceBefore,
        bargashtiPriceBefore, setBargashtiPriceBefore,
        khadamatPriceBefore, setKhadamatPriceBefore,
        jameKolBefore, setJameKolBefore,
        originChandSherkatiPriceBefore, setOriginChandSherkatiPriceBefore,
        destChandSherkatiPriceBefore, setDestChandSherkatiPriceBefore } = GeneralState();

    const [modulesOpen, setModulesOpen] = useState(false);
    const [bargashtiOpen, setBargashtiOpen] = useState(false);
    const [khadamatOpen, setKhadamatOpen] = useState(false);
    const [originErr, setOriginErr] = useState(false);
    const [originCodeName, setOriginCodeName] = useState('');
    const [destCodeErr, setDestCodeErr] = useState(false);
    const [destCodeName, setDestCodeName] = useState('');
    const [karbarEzafe, setKarbarEzafe] = useState(0);
    const [karbarEzafeErr, setKarbarEzafeErr] = useState(false);
    const [karbarEzafeErrTxt, setKarbarEzafeErrTxt] = useState('');
    const [sanavat, setSanavat] = useState('');
    const [tamdidMotevaliAmount, setTamdidMotevaliAmount] = useState('')
    const [tamdidMotevaliErr, setTamdidMotevaliErr] = useState(false);
    const [tamdidMotevaliErrTxt, setTamdidMotevaliErrTxt] = useState(false);
    const [tamdidErr, setTamdidErr] = useState(false);
    const [tamdidErrTxt, setTamdidErrTxt] = useState('نرم افزارهای شبکه شامل سنوات نمی شوند');
    const [forooshJadid, setForooshJadid] = useState(false);


    const openModulesDialog = () => {
        setModulesOpen(true);
    };

    const openBargashtiDialog = () => {
        setBargashtiOpen(true);
    };

    const openKhadamatDialog = () => {
        setKhadamatOpen(true);
    };

    const calculateUpgrade = async () => {
        let upgradeDiffValue;

        if (appCodes.hasOwnProperty(originCode) && appCodes.hasOwnProperty(destCode)) {
            setOriginPrice(Number(appPrices[originCode]));
            setDestPrice(Number(appPrices[destCode]));
            const halfOriginPrice = originPrice / 2;
            const halfDestPrice = destPrice / 2;

            if (originPrice !== 0 && destPrice !== 0) {

                if (originChandSherkati && !destChandSherkati) {
                    setOriginChandSherkatiPrice(halfOriginPrice);
                    upgradeDiffValue = destPrice - (originPrice + halfOriginPrice);
                    await setUpgradeDifference(upgradeDiffValue);

                } else if (destChandSherkati && !originChandSherkati) {
                    setDestChandSherkatiPrice(halfDestPrice);
                    upgradeDiffValue = (halfDestPrice + destPrice) - originPrice;
                    await setUpgradeDifference(upgradeDiffValue);

                } else if (originChandSherkati && destChandSherkati) {
                    setOriginChandSherkatiPrice(halfOriginPrice);
                    setDestChandSherkatiPrice(halfDestPrice);
                    upgradeDiffValue = (halfDestPrice + destPrice) - (halfOriginPrice + originPrice);
                    await setUpgradeDifference(upgradeDiffValue);

                } else {
                    setOriginChandSherkatiPrice(0);
                    setDestChandSherkatiPrice(0);
                    upgradeDiffValue = destPrice - originPrice;
                    await setUpgradeDifference(upgradeDiffValue);
                }

            } else if (originPrice == 0 && destPrice !== 0 && destChandSherkati) {
                setDestChandSherkatiPrice(halfDestPrice);
                await setUpgradeDifference(0)

            } else if (originPrice !== 0 && destPrice == 0 && originChandSherkati) {
                setOriginChandSherkatiPrice(halfDestPrice);
                await setUpgradeDifference(0)

            } else {
                setDestChandSherkatiPrice(0)
                setOriginChandSherkatiPrice(0)
                await setUpgradeDifference(0)
            }
        }
    };

    const originCodeValidation = () => {
        setOriginErr(false);

        if (originCode && appCodes.hasOwnProperty(originCode)) {
            setOriginPrice(appPrices[originCode]);
            setOriginCodeName(appCodes[originCode]);
        } else if (originCode === '') {
            setOriginErr(false);
        } else {
            setOriginErr(true);
        };
    };

    const destCodeValidation = () => {
        setDestCodeErr(false);

        if (appCodes.hasOwnProperty(destCode)) {
            setDestPrice(appPrices[destCode]);
            setDestCodeName(appCodes[destCode]);
        } else if (destCode === '') {
            setDestCodeErr(false);
        } else setDestCodeErr(true);
    };

    const calculateDateDifference = () => {
        const currentDate = moment();
        const differdDate = moment(tamdidDate, 'jYYYY/jMM/jDD');
        const daysDifference = currentDate.diff(differdDate, 'days');

        if (tamdidDate) {

            if (daysDifference <= 365) {
                setSanavat('تمدید تشویقی');
            } else if (daysDifference <= 456 && daysDifference > 365) {
                setSanavat('بدون سنوات');
            } else if (daysDifference > 456 && daysDifference <= 546) {
                setSanavat('بین ۳ تا ۶ ماه');
            } else if (daysDifference > 546 && daysDifference <= 726) {
                setSanavat('بین ۶ تا ۱۲ ماه');
            } else if (daysDifference > 726 && daysDifference <= 906) {
                setSanavat('بین ۱۲ تا ۱۸ ماه');
            } else if (daysDifference > 908 && daysDifference <= 1086) {
                setSanavat('بین ۱۸ تا ۲۴ ماه');
            } else if (daysDifference > 1086) {
                setSanavat('بالای ۲ سال');
            }
        } else setSanavat('\u00A0')
    };

    const calculateTamdid = () => {
        const currentDate = moment();
        const differdDate = moment(tamdidDate, 'jYYYY/jMM/jDD');
        const daysDifference = currentDate.diff(differdDate, 'days');

        if (tamdidDate !== '' && appCodes.hasOwnProperty(destCode)) {

            const tamdidAdi = Number(tamdidPrices[destCode]);
            const tashvighi = (Number(tamdidPrices[destCode])) - (((Number(tamdidPrices[destCode])) * 20) / 100);
            setTashvighiPrice(tashvighi);

            if (networkCodes.includes(destCode) && daysDifference > 365) {

                setTamdidPrice(tamdidAdi);
                setTamdidErr(true);
            } else {
                setTamdidErr(false);
                if (daysDifference <= 365) {
                    setTamdidPrice(tashvighi);

                } else if (daysDifference <= 456 && daysDifference > 365) {
                    setTamdidPrice(tamdidAdi);

                } else if (daysDifference > 456 && daysDifference <= 546) {
                    setTamdidPrice(tamdidAdi + (tamdidAdi * 10) / 100);

                } else if (daysDifference > 546 && daysDifference <= 726) {
                    setTamdidPrice(tamdidAdi + (tamdidAdi * 20) / 100);

                } else if (daysDifference > 726 && daysDifference <= 906) {
                    setTamdidPrice(tamdidAdi + (tamdidAdi * 30) / 100);

                } else if (daysDifference > 908 && daysDifference <= 1086) {
                    setTamdidPrice(tamdidAdi + (tamdidAdi * 40) / 100);

                } else if (daysDifference > 1086) {
                    setTamdidPrice(tamdidAdi + (tamdidAdi * 50) / 100);
                };
            };

        } else {
            setTamdidPrice(0);
            setTashvighiPrice(0);
        };
    };

    const calculateTamdidMotevali = () => {
        const currentDate = moment();
        const differdDate = moment(tamdidDate, 'jYYYY/jMM/jDD');
        const daysDifference = currentDate.diff(differdDate, 'days');
        var tamdidMotevaliPriceValue;

        if (daysDifference <= 356) {
            if (0 < tamdidMotevali && tamdidMotevali <= 2) {
                console.log(1);
                tamdidMotevaliPriceValue = (Number(tamdidPrice) * 25) / 100
                setMotevaliPrice(tamdidMotevaliPriceValue)
                setTamdidMotevaliAmount('بیست و پنج درصد')
            } else if (2 < tamdidMotevali && tamdidMotevali <= 3) {
                console.log(2);
                tamdidMotevaliPriceValue = (Number(tamdidPrice) * 30) / 100
                setMotevaliPrice(tamdidMotevaliPriceValue)
                setTamdidMotevaliAmount('سی درصد')
            } else if (3 < tamdidMotevali && tamdidMotevali <= 4) {
                console.log(3);
                tamdidMotevaliPriceValue = (Number(tamdidPrice) * 35) / 100
                setMotevaliPrice(tamdidMotevaliPriceValue)
                setTamdidMotevaliAmount('سی و پنج درصد')
            } else if (4 < tamdidMotevali && tamdidMotevali <= 5) {
                console.log(4);
                tamdidMotevaliPriceValue = (Number(tamdidPrice) * 40) / 100
                setMotevaliPrice(tamdidMotevaliPriceValue)
                setTamdidMotevaliAmount('چهل درصد')
            } else if (5 < tamdidMotevali && tamdidMotevali <= 6) {
                console.log(5);
                tamdidMotevaliPriceValue = (Number(tamdidPrice) * 45) / 100
                setMotevaliPrice(tamdidMotevaliPriceValue)
                setTamdidMotevaliAmount('چهل و پنج درصد')
            } else if (tamdidMotevali > 7) {
                console.log(6);
                tamdidMotevaliPriceValue = (Number(tamdidPrice) * 50) / 100
                setMotevaliPrice(tamdidMotevaliPriceValue)
                setTamdidMotevaliAmount('پنجاه درصد')
            }
        } else {
            if (tamdidMotevali) {
                setTamdidMotevaliErr(true);
                setTamdidMotevaliErrTxt('تمدید متوالی فقط برای موارد بدون سنوات اعمال خواهد شد')
            }
        }
    };

    const claculateKarbarEzafe = () => {
        if (destCode) {
            if (tamdidPrice) {
                if (karbarEzafe == 0 || appCodes.hasOwnProperty(destCode)) {
                    const karbarEzafeValue = (Number(tamdidPrice) / 10) * (Number(karbarEzafe))
                    setKarbarEzafePrice(karbarEzafeValue)
                } else {
                    setKarbarEzafeErr(true);
                    setKarbarEzafeErrTxt('کد نامعتبر')
                }

            } else {
                if (karbarEzafe == 0 || appCodes.hasOwnProperty(destCode)) {

                    if (networkCodes.includes(destCode) || karbarEzafe == 0) {
                        const karbarEzafeValue = Number(((appPrices[destCode]) / 10) * karbarEzafe)
                        setKarbarEzafePrice(karbarEzafeValue)
                    } else {
                        setKarbarEzafeErr(true);
                        setKarbarEzafeErrTxt('کد غیر شبکه')
                        setKarbarEzafePrice(0)
                    }
                } else {
                    setKarbarEzafeErr(true);
                    setKarbarEzafeErrTxt('کد نامعتبر')
                }
            }

        }
    };

    const calculateChandSherkati = () => {
        if (destCode && chandSherkati) {
            setChandSherkatiPrice(Number(appPrices[destCode]) / 2);
        } else setChandSherkatiPrice(0)
    };

    const calculateTabdilBeGhofl = () => {
        if (destCode && tabdilBeGhofl) {
            setTabdilBeGhoflPrice(6500000)
        } else setTabdilBeGhoflPrice(0)
    };

    const handleInputDate = (e) => {
        let value = e.target.value;
        const numericValue = value.replace(/\D/g, '');
        const formattedDate = numericValue.replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3');
        const rearrangedDate = formattedDate.replace(/(\d{2})\/(\d{2})\/(\d{4})/, '$3/$2/$1');
        setTamdidDate(rearrangedDate);
    };

    const calculateSaleTakhfif = () => {
        if (saleTakhfif && destCode && !upgradeDifference) {
            const saleAfter = Number(destPrice) - ((Number(destPrice) * Number(saleTakhfif)) / 100)
            setDestAfterTakhfif(saleAfter)
        } else setDestAfterTakhfif(0)
    };

    const calculateUpgradeTakhfif = () => {
        if (saleTakhfif && upgradeDifference) {
            const UpgradeAdter = Number(upgradeDifference) - ((Number(upgradeDifference) * Number(saleTakhfif)) / 100)
            setUpgradeAfterTakhfif(UpgradeAdter)
        } else if (saleTakhfif && !upgradeDifference) {
            setTamdidAfterTakhfifErr(true)
            setUpgradeAfterTakhfif(0)
        } else setUpgradeAfterTakhfif(0)
    };

    const calculateTamdidTakhfif = () => {
        if (tamdidTakhfif && destCode && tamdidDate) {
            const tamdidAfter = Number(tamdidPrice) - ((Number(tamdidPrice) * Number(tamdidTakhfif)) / 100)
            setTamdidAfterTakhfif(tamdidAfter)
        } else if (tamdidTakhfif && !destCode && !tamdidDate) {
            setTamdidAfterTakhfifErr(true)
            setTamdidAfterTakhfif(0)
        } else setTamdidAfterTakhfif(0)
    };

    const claculateKarbarEzafeTakhfif = () => {
        if (karbarEzafeTakhfif && karbaeEzafePrice) {
            const karbarEzafeAfter = Number(karbaeEzafePrice) - ((Number(karbaeEzafePrice) * Number(karbarEzafeTakhfif)) / 100)
            setKarbarEzafeAfterTakhfif(karbarEzafeAfter)
        } else if (karbarEzafeTakhfif && !karbaeEzafePrice) {
            setKarbarEzafeAfterTakhfifErr(true)
            setKarbarEzafeAfterTakhfif(0)
        } else setKarbarEzafeAfterTakhfif(0)
    };

    const calculateChandSherkatiTakhfif = () => {
        if (chandSherkatiTakhfif && chandSherkatiPrice) {
            const ChandSherkatiAfter = Number(chandSherkatiPrice) - ((Number(chandSherkatiPrice) * Number(chandSherkatiTakhfif)) / 100)
            setChandSherkatiAfterTakhfif(ChandSherkatiAfter)
        } else if (chandSherkatiTakhfif && !chandSherkatiPrice) {
            setChandSherkatiAfterTakhfifErr(true)
            setChandSherkatiAfterTakhfif(0)
        } else setChandSherkatiAfterTakhfif(0)
    };

    const calculateTabdilBeGhoflTakhfif = () => {
        if (tabdilBeGhoflTakhfif && tabdilBeGhoflPrice) {
            const tabdilBeGhoflAfter = Number(tabdilBeGhoflPrice) - ((Number(tabdilBeGhoflPrice) * Number(tabdilBeGhoflTakhfif)) / 100)
            setTabdilBeGhoflAfterTakhfif(tabdilBeGhoflAfter)
        } else if (tabdilBeGhoflTakhfif && !tabdilBeGhoflPrice) {
            setTabdilBeGhoflAfterTakhfifErr(true)
            setTabdilBeGhoflAfterTakhfif(0)
        } else setTabdilBeGhoflAfterTakhfif(0)
    };

    const calculateModulesTakhfif = () => {
        if (modulesTakhfif && modulesPrice) {
            const modulesAfter = Number(modulesPrice) - ((Number(modulesPrice) * Number(modulesTakhfif)) / 100)
            setModulesAfterTakhfif(modulesAfter)
        } else if (modulesTakhfif && !modulesPrice) {
            setModulesAfterTakhfifErr(true)
            setModulesAfterTakhfif(0)
        } else setModulesAfterTakhfif(0)
    };

    const calculateBargashtiTakhfif = () => {
        if (bargashtiTakhfif && bargashtiPrice) {
            const bargashtiAfter = Number(bargashtiPrice) - ((Number(bargashtiPrice) * Number(bargashtiTakhfif)) / 100)
            setBargashtiAfterTakhfif(bargashtiAfter)
        } else if (bargashtiTakhfif && !bargashtiPrice) {
            setBargashtiAfterTakhfifErr(true)
            setBargashtiAfterTakhfif(0)
        } else setBargashtiAfterTakhfif(0)
    };

    const calculateKhadamatTakhfif = () => {
        if (khadamatTakhfif && khadamatPrice) {
            const khadamatAfter = Number(khadamatPrice) - ((Number(khadamatPrice) * Number(khadamatTakhfif)) / 100)
            setKhadamatAfterTakhfif(khadamatAfter)
        } else if (khadamatTakhfif && !khadamatPrice) {
            setKhadamatAfterTakhfifErr(true)
            setKhadamatAfterTakhfif(0)
        } else setKhadamatAfterTakhfif(0)
    };

    const calculateJameKol = () => {
        let total = Number((Number(destPrice) + Number(upgradeDifference) + Number(tamdidPrice) + Number(karbaeEzafePrice) + Number(chandSherkatiPrice) + Number(tabdilBeGhoflPrice) + Number(modulesPrice) + Number(bargashtiPrice) + Number(khadamatPrice)) - Number(motevaliPrice));
        if (forooshJadid) {
            setJameKol(total);
        } else if (!forooshJadid) {
            const currentDate = moment();
            const differdDate = moment(tamdidDate, 'jYYYY/jMM/jDD');
            const daysDifference = currentDate.diff(differdDate, 'days');
            if (daysDifference <= 365) {
                setJameKol(total - Number(destPrice) - Number(tamdidPrice) + Number(tashvighiPrice));
            } else {
                setJameKol(total - Number(destPrice));
            };
        };
        setTashvighiPriceBefore(Number(tashvighiPrice) - (Number(tashvighiPrice)) / 10);
        setMotevaliPriceBefore(Number(motevaliPrice) - (Number(motevaliPrice)) / 10);
        setKarbarEzafePriceBefore(Number(karbaeEzafePrice) - (Number(karbaeEzafePrice)) / 10);
        setChandSherkatiPriceBefore(Number(chandSherkatiPrice) - (Number(chandSherkatiPrice)) / 10);
        setTabdilBeGhoflPriceBefore(Number(tabdilBeGhoflPrice) - (Number(tabdilBeGhoflPrice)) / 10);
        setModulesPriceBefore(Number(modulesPrice) - (Number(modulesPrice)) / 10);
        setBargashtiPriceBefore(Number(bargashtiPrice) - (Number(bargashtiPrice)) / 10);
        setKhadamatPriceBefore(Number(khadamatPrice) - (Number(khadamatPrice)) / 10);
    };

    const calculateBeforeArzeshAfzoode = () => {
        let total = Number((Number(destPriceBefore) + Number(upgradeDifferenceBefore) + Number(tamdidPriceBefore) + Number(karbaeEzafePriceBefore) + Number(chandSherkatiPriceBefore) + Number(tabdilBeGhoflPriceBefore) + Number(modulesPriceBefore) + Number(bargashtiPriceBefore) + Number(khadamatPriceBefore)) - Number(motevaliPriceBefore));
        if (forooshJadid) {
            setJameKolBefore(total);
        } else if (!forooshJadid) {
            const currentDate = moment();
            const differdDate = moment(tamdidDate, 'jYYYY/jMM/jDD');
            const daysDifference = currentDate.diff(differdDate, 'days');
            if (daysDifference <= 365) {
                setJameKolBefore(total - Number(destPriceBefore) - Number(tamdidPriceBefore) + Number(tashvighiPriceBefore))
            } else setJameKolBefore(total - Number(destPriceBefore))
        }
    }

    const calculateJameKolTakhfif = () => {
        let totalAfter = (Number(destAfterTakhfif) + Number(tamdidAfterTakhfif) + Number(upgradeAfterTakhfif) + Number(karbarEzafeAfterTakhfif) + Number(chandSherkatiAfterTakhfif) + Number(tabdilBeGhoflAfterTakhfif) + Number(modulesAfterTakhfif) + Number(bargashtiAfterTakhfif) + Number(khadamatAfterTakhfif)) - Number(motevaliPrice);
        if (forooshJadid) {
            setJameKolAfterTakhfif(totalAfter);
        } else if (!forooshJadid) {
            const currentDate = moment();
            const differdDate = moment(tamdidDate, 'jYYYY/jMM/jDD');
            const daysDifference = currentDate.diff(differdDate, 'days');
            if (daysDifference <= 365) {
                setJameKolAfterTakhfif(Number(totalAfter))
            } else setJameKolAfterTakhfif(Number(totalAfter) - Number(destAfterTakhfif));
        }
    };

    useEffect(() => {
        setOriginPriceBefore(Number(originPrice) - (Number(originPrice)) / 10);
    }, [originPrice]);

    useEffect(() => {
        setDestPriceBefore(Number(destPrice) - (Number(destPrice)) / 10);
    }, [destPrice]);

    useEffect(() => {
        calculateUpgrade()
    }, [destPrice, originPrice]);

    useEffect(() => {
        setUpgradeDifferenceBefore(Number(upgradeDifference) - (Number(upgradeDifference)) / 10);
    }, [upgradeDifference]);

    useEffect(() => {
        setOriginChandSherkatiPriceBefore(Number(originChandSherkatiPrice) - (Number(originChandSherkatiPrice)) / 10);
    }, [originChandSherkatiPrice]);

    useEffect(() => {
        setDestChandSherkatiPriceBefore(Number(destChandSherkatiPrice) - (Number(destChandSherkatiPrice)) / 10);
    }, [destChandSherkatiPrice]);

    useEffect(() => {
        setTamdidPriceBefore(Number(tamdidPrice) - (Number(tamdidPrice)) / 10);
    }, [tamdidPrice]);

    useEffect(() => {
        setJameKolBefore(Number(jameKol) - (Number(jameKol)) / 10);
    }, [jameKol]);

    useEffect(() => {
        calculateTamdidMotevali()
    }, [tamdidMotevali])

    useEffect(() => {
        calculateUpgradeTakhfif()
    }, [upgradeDifference, saleTakhfif])

    useEffect(() => {
        calculateSaleTakhfif()
    }, [saleTakhfif]);

    useEffect(() => {
        calculateTamdidTakhfif()
    }, [tamdidTakhfif])

    useEffect(() => {
        claculateKarbarEzafeTakhfif()
    }, [karbarEzafeTakhfif])

    useEffect(() => {
        calculateChandSherkatiTakhfif()
    }, [chandSherkatiTakhfif])

    useEffect(() => {
        calculateTabdilBeGhoflTakhfif()
    }, [tabdilBeGhoflTakhfif])

    useEffect(() => {
        calculateModulesTakhfif()
    }, [modulesTakhfif])

    useEffect(() => {
        calculateBargashtiTakhfif()
    }, [bargashtiTakhfif])

    useEffect(() => {
        calculateKhadamatTakhfif()
    }, [khadamatTakhfif])

    useEffect(() => {
        calculateBeforeArzeshAfzoode();
    }, [destPriceBefore, tamdidPriceBefore, karbaeEzafePriceBefore, chandSherkatiPriceBefore, tabdilBeGhoflPriceBefore, modulesPriceBefore, bargashtiPriceBefore, khadamatPriceBefore, motevaliPriceBefore, forooshJadid])

    useEffect(() => {
        calculateJameKol();
    }, [destPrice, upgradeDifference, tamdidPrice, karbaeEzafePrice, chandSherkatiPrice, tabdilBeGhoflPrice, modulesPrice, bargashtiPrice, khadamatPrice, motevaliPrice, forooshJadid])

    useEffect(() => {
        calculateJameKolTakhfif();
    }, [destAfterTakhfif, tamdidAfterTakhfif, karbarEzafeAfterTakhfif, chandSherkatiAfterTakhfif, tabdilBeGhoflAfterTakhfif, modulesAfterTakhfif, bargashtiAfterTakhfif, khadamatAfterTakhfif])

    const calculate = () => {
        setOriginErr(false);
        setOriginErr(false);
        setDestCodeErr(false);
        setKarbarEzafeErr(false);
        setTamdidErr(false);
        setTamdidMotevaliErr(false);
        originCodeValidation();
        destCodeValidation();
        calculateDateDifference()
        calculateUpgrade();
        calculateTamdid();
        calculateTamdidMotevali();
        claculateKarbarEzafe();
        calculateChandSherkati();
        calculateTabdilBeGhofl();
        calculateSaleTakhfif();
        calculateUpgradeTakhfif();
        // calculateJameKolTakhfif()
    };

    const reset = () => {
        setOriginCode('')
        setDestCode('')
        setUpgradeDifference(0)
        setOriginCodeName('')
        setDestCodeName('')
        setKarbarEzafeErrTxt('')
        setSanavat('')
        setTamdidMotevaliAmount('')
        setOriginChandSherkati(false)
        setDestChandSherkati(false)
        setChandSherkati(false)
        setTabdilBeGhofl(false)
        setResultsOpen(false)
        setOriginAfterTakhfifErr(false)
        setDestAfterTakhfifErr(false)
        setUpgradeAfterTakhfifErr(false)
        setTamdidAfterTakhfifErr(false)
        setKarbarEzafeAfterTakhfifErr(false)
        setChandSherkatiAfterTakhfifErr(false)
        setTabdilBeGhoflAfterTakhfifErr(false)
        setModulesAfterTakhfifErr(false)
        setBargashtiAfterTakhfifErr(false)
        setKhadamatAfterTakhfifErr(false)
        setCalc(false)
        setModulesOpen(false)
        setBargashtiOpen(false)
        setKhadamatOpen(false)
        setOriginErr(false)
        setDestCodeErr(false)
        setKarbarEzafeErr(false)
        setTamdidMotevaliErr(false)
        setTamdidMotevaliErrTxt(false)
        setTamdidErr(false)
        setForooshJadid(false)
        setOriginChandSherkatiPrice(0)
        setDestChandSherkatiPrice(null)
        setTamdidDate('')
        setTamdidMotevali('')
        setKarbarEzafePrice(0)
        setModules(null)
        setBargashti(null)
        setKhadamat(null)
        setSaleTakhfif(0)
        setTamdidTakhfif(0)
        setKarbarEzafeTakhfif(0)
        setChandSherkatiTakhfif(0)
        setTabdilBeGhoflTakhfif(0)
        setModulesTakhfif(0)
        setBargashtiTakhfif(0)
        setKhadamatTakhfif(0)
        setOriginPrice(0)
        setDestPrice(0)
        setTamdidPrice(0)
        setTashvighiPrice(0)
        setMotevaliPrice(0)
        setChandSherkatiPrice(0)
        setTabdilBeGhoflPrice(0)
        setModulesPrice(0)
        setBargashtiPrice(0)
        setKhadamatPrice(0)
        setJameKol(0)
        setOriginAfterTakhfif(0)
        setDestAfterTakhfif(0)
        setUpgradeAfterTakhfif(0)
        setTamdidAfterTakhfif(0)
        setKarbarEzafeAfterTakhfif(0)
        setChandSherkatiAfterTakhfif(0)
        setTabdilBeGhoflAfterTakhfif(0)
        setModulesAfterTakhfif(0)
        setBargashtiAfterTakhfif(0)
        setKhadamatAfterTakhfif(0)
        setJameKolAfterTakhfif(0)
        setKarbarEzafe(0)
        setOriginPriceBefore(0)
        setDestPriceBefore(0)
        setUpgradeDifferenceBefore(0)
        setTamdidPriceBefore(0)
        setTashvighiPriceBefore(0)
        setMotevaliPriceBefore(0)
        setKarbarEzafePriceBefore(0)
        setChandSherkatiPriceBefore(0)
        setTabdilBeGhoflPriceBefore(0)
        setModulesPriceBefore(0)
        setBargashtiPriceBefore(0)
        setKhadamatPriceBefore(0)
        setJameKolBefore(0)
        setOriginChandSherkatiPriceBefore(0)
        setDestChandSherkatiPriceBefore(0)
        setTamdidErrTxt('نرم افزارهای شبکه شامل سنوات نمی شوند')
    }

    useEffect(() => {
        calculate()
    }, [calc]);

    useEffect(() => {
        reset()
    }, [resetState]);

    useEffect(() => {

        ipcRenderer.on('update-available', () => {
            console.log('update available');
        });

        ipcRenderer.on('download-progress', (event, progressObj) => {
            console.log(event);
            console.log(progressObj);
        });

        ipcRenderer.on('update-downloaded', () => {
            console.log('download finished');
        });
    }, [])


    return (
        <Box sx={{ maxHeight: '97%', width: '50%', backgroundColor: 'rgba(255, 255, 255, 0.5)', backdropFilter: 'blur(5px) saturate(180%)', border: '1px solid rgba(38, 66, 77, 0.5)', mt: '1rem', borderRadius: 5, boxShadow: 3, padding: '1rem' }}>
            <Stack spacing={1}>

                <Stack direction="column" spacing={1}>

                    <Stack direction="column" spacing={2}>
                        <Divider>
                            <Chip label="آپگرید و فروش" size="small" />
                        </Divider>

                        <Stack spacing={1} direction='row'>
                            <ToggleButton sx={{
                                height: '2.5rem', width: '10rem', '&.Mui-selected': { backgroundColor: '#2e651f', color: '#ffffff' }
                            }} color="secondary" value="check" selected={originChandSherkati} size="small" onChange={() => { setOriginChandSherkati(!originChandSherkati); }}><Typography variant="caption">چند شرکتی</Typography>
                            </ToggleButton>

                            <FormControl error={originErr} >
                                <TextField onKeyDown={(event) => {
                                    if (event.key === 'Enter') {
                                        calculate()
                                    }
                                }} error={originErr} defaultValue={originCode} onChange={(e) => {
                                    const updatedValue = e.target.value;
                                    setOriginCode(updatedValue)
                                }} sx={{ backgroundColor: 'rgba(252, 243, 224, 0.1)', backdropFilter: 'blur(5px) saturate(180%)', width: '98%', mr: 2 }} type="text" className="originCode" id="originCode" label="کد مبدا" variant="outlined" size="small" />
                                <FormHelperText>
                                    <Typography variant="caption">
                                        {originErr ? 'کد نامعتبر' : (originCodeName || '\u00A0')}
                                    </Typography>
                                </FormHelperText>
                            </FormControl>
                        </Stack>
                    </Stack>

                    <Stack spacing={1} direction='row'>

                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <ToggleButton sx={{ ml: 1, height: '2.5rem', width: '3rem', '&.Mui-selected': { backgroundColor: '#2e651f', color: '#ffffff' } }} color="secondary" value="check" selected={destChandSherkati} size="small" onChange={() => { setDestChandSherkati(!destChandSherkati); }}>
                                <Typography variant="caption">چند شرکتی</Typography>
                            </ToggleButton>

                            <ToggleButton sx={{ height: '2.5rem', width: '3rem', '&.Mui-selected': { backgroundColor: '#2e651f', color: '#ffffff' } }} color="secondary" value="check" selected={forooshJadid} size="small" onChange={() => { setForooshJadid(!forooshJadid); }}>
                                <Typography variant="caption">فروش جدید</Typography>
                            </ToggleButton>
                        </Box>

                        <FormControl error={destCodeErr}>
                            <TextField onKeyDown={(event) => {
                                if (event.key === 'Enter') {
                                    calculate()
                                }
                            }} error={destCodeErr} onChange={(e) => {
                                const updatedValue = e.target.value;
                                setDestCode(updatedValue);
                            }} sx={{ backgroundColor: 'rgba(252, 243, 224, 0.1)', backdropFilter: 'blur(5px) saturate(180%)', width: '98%', mr: 2 }} type="text" label="کد مقصد" variant="outlined" size="small" />
                            <FormHelperText>
                                <Typography variant="caption">
                                    {destCodeErr ? 'کد نامعتبر' : (destCodeName || '\u00A0')}
                                </Typography>
                            </FormHelperText>
                        </FormControl>
                    </Stack>

                </Stack>

                <Stack direction="column" spacing={1}>

                    <Stack direction="column" spacing={3}>
                        <Divider sx={{ mb: 2 }}>
                            <Chip label="تمدید پشتیبانی" size="small" />
                        </Divider>

                        <Box>

                            <Tooltip title="به ترتیب روز - ماه -  سال وارد شود" placement="top-start" arrow followCursor>
                                <FormControl error={tamdidErr} fullWidth>
                                    <TextField inputProps={{ maxLength: 8 }} value={tamdidDate} error={tamdidErr} onChange={(e) => handleInputDate(e)} sx={{ backgroundColor: 'rgba(252, 243, 224, 0.1)', backdropFilter: 'blur(5px) saturate(180%)' }} label='تاریخ شروع گارانتی' type="text" variant="outlined" size="small" />
                                    <FormHelperText>
                                        <Typography variant="caption">
                                            {tamdidErr ? (tamdidErrTxt) : (
                                                sanavat ? (sanavat) : ('\u00A0')
                                            )}
                                        </Typography>
                                    </FormHelperText>
                                </FormControl>
                            </Tooltip>
                        </Box>
                    </Stack>

                    <Box>
                        <FormControl error={tamdidMotevaliErr} fullWidth>
                            <TextField onKeyDown={(event) => {
                                if (event.key === 'Enter') {
                                    calculate()
                                }
                            }} error={tamdidMotevaliErr} onChange={(e) => setTamdidMotevali(e.target.value)} sx={{ backgroundColor: 'rgba(252, 243, 224, 0.1)', backdropFilter: 'blur(5px) saturate(180%)' }} label='سالهای متوالی تمدید' type="text" className="tamdidMotevali" id="tamdidMotevali" variant="outlined" size="small" />
                            <FormHelperText>
                                <Typography variant="caption">
                                    {tamdidMotevaliErr ?
                                        (tamdidMotevaliErrTxt)
                                        : (tamdidMotevali ? `${tamdidMotevaliAmount} از مبلغ تمدید عادی کسر می‌شود` : '\u00A0')}
                                </Typography>
                            </FormHelperText>
                        </FormControl>
                    </Box>
                </Stack>

                <Stack direction='column' spacing={1}>

                    <Stack direction='column' spacing={2}>
                        <Divider sx={{ mb: 2 }}>
                            <Chip label="سایر موارد" size="small" />
                        </Divider>

                        <Box>
                            <FormControl error={karbarEzafeErr} fullWidth>
                                <TextField onKeyDown={(event) => {
                                    if (event.key === 'Enter') {
                                        calculate()
                                    }
                                }} error={karbarEzafeErr} sx={{ backgroundColor: 'rgba(252, 243, 224, 0.1)', backdropFilter: 'blur(5px) saturate(180%)' }} onChange={(e) => setKarbarEzafe(e.target.value)} label='کاربر اضافه' type="text" className="karbarEzafe" id="origikarbarEzafenCode" variant="outlined" size="small" />
                                <FormHelperText>
                                    <Typography variant="caption">
                                        {karbarEzafeErr ? (karbarEzafeErrTxt) : (karbaeEzafePrice == 0 ? ('\u00A0') : (Number(karbaeEzafePrice).toLocaleString()))}
                                    </Typography>
                                </FormHelperText>
                            </FormControl>
                        </Box>
                    </Stack>

                    <FormGroup dir="rtl">
                        <Stack spacing={0.5}>
                            <FormControlLabel control={<Switch onChange={(e) => setChandSherkati(e.target.checked)} />} label="چند شرکتی" />
                            <FormControlLabel control={<Switch onChange={(e) => setTabdilBeGhofl(e.target.checked)} />} label="تبدیل به کارت" />
                        </Stack>
                    </FormGroup>

                </Stack>
            </Stack>

            <Divider sx={{ mb: 2, mt: 1 }}>
                <Chip label="ماژول ها و خدمات" size="small" />
            </Divider>

            <Stack spacing={2}>
                <Button onClick={openModulesDialog} variant="contained" endIcon={<ExtensionOutlinedIcon />}><Typography sx={{ ml: 5.5 }}>افزودن کیت و ماژول</Typography></Button>
                <Button onClick={openBargashtiDialog} variant="contained" endIcon={<ExtensionOffOutlinedIcon />}><Typography sx={{ ml: 5.5 }}>کیت و ماژول برگشتی</Typography></Button>
                <Button onClick={openKhadamatDialog} variant="contained" endIcon={<ManageAccountsOutlinedIcon />}><Typography sx={{ ml: 3 }}>افزودن خدمات کارشناسی</Typography></Button>
            </Stack>

            <ModulesDialog open={modulesOpen} setOpen={setModulesOpen} />
            <BargashtiDialog open={bargashtiOpen} setOpen={setBargashtiOpen} />
            <KhadamatDialog open={khadamatOpen} setOpen={setKhadamatOpen} />
        </Box >
    );
}

export default EntrySection;


