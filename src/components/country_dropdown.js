import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const countryOptions = [ 
    {'key': 'ad', 'value': 'ad', 'flag': 'ad', 'text': 'Andorra'},
    {'key': 'ae', 'value': 'ae', 'flag': 'ae', 'text': 'U.A.E'},
    {'key': 'af', 'value': 'af', 'flag': 'af', 'text': 'Afghanistan'},
    {'key': 'ag', 'value': 'ag', 'flag': 'ag', 'text': 'Antigua'},
    {'key': 'ai', 'value': 'ai', 'flag': 'ai', 'text': 'Anguilla'},
    {'key': 'al', 'value': 'al', 'flag': 'al', 'text': 'Albania'},
    {'key': 'am', 'value': 'am', 'flag': 'am', 'text': 'Armenia'},
    {'key': 'an', 'value': 'an', 'flag': 'an', 'text': 'Netherlands Antilles'},
    {'key': 'ao', 'value': 'ao', 'flag': 'ao', 'text': 'Angola'},
    {'key': 'ar', 'value': 'ar', 'flag': 'ar', 'text': 'Argentina'},
    {'key': 'as', 'value': 'as', 'flag': 'as', 'text': 'American Samoa'},
    {'key': 'at', 'value': 'at', 'flag': 'at', 'text': 'Austria'},
    {'key': 'au', 'value': 'au', 'flag': 'au', 'text': 'Australia'},
    {'key': 'aw', 'value': 'aw', 'flag': 'aw', 'text': 'Aruba'},
    {'key': 'ax', 'value': 'ax', 'flag': 'ax', 'text': 'Aland Islands'},
    {'key': 'az', 'value': 'az', 'flag': 'az', 'text': 'Azerbaijan'},
    {'key': 'ba', 'value': 'ba', 'flag': 'ba', 'text': 'Bosnia'},
    {'key': 'bb', 'value': 'bb', 'flag': 'bb', 'text': 'Barbados'},
    {'key': 'bd', 'value': 'bd', 'flag': 'bd', 'text': 'Bangladesh'},
    {'key': 'be', 'value': 'be', 'flag': 'be', 'text': 'Belgium'},
    {'key': 'bf', 'value': 'bf', 'flag': 'bf', 'text': 'Burkina Faso'},
    {'key': 'bg', 'value': 'bg', 'flag': 'bg', 'text': 'Bulgaria'},
    {'key': 'bh', 'value': 'bh', 'flag': 'bh', 'text': 'Bahrain'},
    {'key': 'bi', 'value': 'bi', 'flag': 'bi', 'text': 'Burundi'},
    {'key': 'bj', 'value': 'bj', 'flag': 'bj', 'text': 'Benin'},
    {'key': 'bm', 'value': 'bm', 'flag': 'bm', 'text': 'Bermuda'},
    {'key': 'bn', 'value': 'bn', 'flag': 'bn', 'text': 'Brunei'},
    {'key': 'bo', 'value': 'bo', 'flag': 'bo', 'text': 'Bolivia'},
    {'key': 'br', 'value': 'br', 'flag': 'br', 'text': 'Brazil'},
    {'key': 'bs', 'value': 'bs', 'flag': 'bs', 'text': 'Bahamas'},
    {'key': 'bt', 'value': 'bt', 'flag': 'bt', 'text': 'Bhutan'},
    {'key': 'bv', 'value': 'bv', 'flag': 'bv', 'text': 'Bouvet Island'},
    {'key': 'bw', 'value': 'bw', 'flag': 'bw', 'text': 'Botswana'},
    {'key': 'by', 'value': 'by', 'flag': 'by', 'text': 'Belarus'},
    {'key': 'bz', 'value': 'bz', 'flag': 'bz', 'text': 'Belize'},
    {'key': 'ca', 'value': 'ca', 'flag': 'ca', 'text': 'Canada'},
    {'key': 'cc', 'value': 'cc', 'flag': 'cc', 'text': 'Cocos Islands'},
    {'key': 'cd', 'value': 'cd', 'flag': 'cd', 'text': 'Congo'},
    {'key': 'cf', 'value': 'cf', 'flag': 'cf', 'text': 'Central African Republic'},
    {'key': 'cg', 'value': 'cg', 'flag': 'cg', 'text': 'Congo Brazzaville'},
    {'key': 'ch', 'value': 'ch', 'flag': 'ch', 'text': 'Switzerland'},
    {'key': 'ci', 'value': 'ci', 'flag': 'ci', 'text': 'Cote Divoire'},
    {'key': 'ck', 'value': 'ck', 'flag': 'ck', 'text': 'Cook Islands'},
    {'key': 'cl', 'value': 'cl', 'flag': 'cl', 'text': 'Chile'},
    {'key': 'cm', 'value': 'cm', 'flag': 'cm', 'text': 'Cameroon'},
    {'key': 'cn', 'value': 'cn', 'flag': 'cn', 'text': 'China'},
    {'key': 'co', 'value': 'co', 'flag': 'co', 'text': 'Colombia'},
    {'key': 'cr', 'value': 'cr', 'flag': 'cr', 'text': 'Costa Rica'},
    {'key': 'cs', 'value': 'cs', 'flag': 'cs', 'text': 'Serbia'},
    {'key': 'cu', 'value': 'cu', 'flag': 'cu', 'text': 'Cuba'},
    {'key': 'cv', 'value': 'cv', 'flag': 'cv', 'text': 'Cape Verde'},
    {'key': 'cx', 'value': 'cx', 'flag': 'cx', 'text': 'Christmas Island'},
    {'key': 'cy', 'value': 'cy', 'flag': 'cy', 'text': 'Cyprus'},
    {'key': 'cz', 'value': 'cz', 'flag': 'cz', 'text': 'Czech Republic'},
    {'key': 'de', 'value': 'de', 'flag': 'de', 'text': 'Germany'},
    {'key': 'dj', 'value': 'dj', 'flag': 'dj', 'text': 'Djibouti'},
    {'key': 'dk', 'value': 'dk', 'flag': 'dk', 'text': 'Denmark'},
    {'key': 'dm', 'value': 'dm', 'flag': 'dm', 'text': 'Dominica'},
    {'key': 'do', 'value': 'do', 'flag': 'do', 'text': 'Dominican Republic'},
    {'key': 'dz', 'value': 'dz', 'flag': 'dz', 'text': 'Algeria'},
    {'key': 'ec', 'value': 'ec', 'flag': 'ec', 'text': 'Ecuador'},
    {'key': 'ee', 'value': 'ee', 'flag': 'ee', 'text': 'Estonia'},
    {'key': 'eg', 'value': 'eg', 'flag': 'eg', 'text': 'Egypt'},
    {'key': 'eh', 'value': 'eh', 'flag': 'eh', 'text': 'Western Sahara'},
    {'key': 'er', 'value': 'er', 'flag': 'er', 'text': 'Eritrea'},
    {'key': 'es', 'value': 'es', 'flag': 'es', 'text': 'Spain'},
    {'key': 'et', 'value': 'et', 'flag': 'et', 'text': 'Ethiopia'},
    {'key': 'eu', 'value': 'eu', 'flag': 'eu', 'text': 'European Union'},
    {'key': 'fi', 'value': 'fi', 'flag': 'fi', 'text': 'Finland'},
    {'key': 'fj', 'value': 'fj', 'flag': 'fj', 'text': 'Fiji'},
    {'key': 'fk', 'value': 'fk', 'flag': 'fk', 'text': 'Falkland Islands'},
    {'key': 'fm', 'value': 'fm', 'flag': 'fm', 'text': 'Micronesia'},
    {'key': 'fo', 'value': 'fo', 'flag': 'fo', 'text': 'Faroe Islands'},
    {'key': 'fr', 'value': 'fr', 'flag': 'fr', 'text': 'France'},
    {'key': 'ga', 'value': 'ga', 'flag': 'ga', 'text': 'Gabon'},
    {'key': 'gb', 'value': 'gb', 'flag': 'gb', 'text': 'United Kingdom'},
    {'key': 'gb sct', 'value': 'gb sct', 'flag': 'gb sct', 'text': 'Scotland'},
    {'key': 'gb wls', 'value': 'gb wls', 'flag': 'gb wls', 'text': 'Wales'},
    {'key': 'gd', 'value': 'gd', 'flag': 'gd', 'text': 'Grenada'},
    {'key': 'ge', 'value': 'ge', 'flag': 'ge', 'text': 'Georgia'},
    {'key': 'gf', 'value': 'gf', 'flag': 'gf', 'text': 'French Guiana'},
    {'key': 'gh', 'value': 'gh', 'flag': 'gh', 'text': 'Ghana'},
    {'key': 'gi', 'value': 'gi', 'flag': 'gi', 'text': 'Gibraltar'},
    {'key': 'gl', 'value': 'gl', 'flag': 'gl', 'text': 'Greenland'},
    {'key': 'gm', 'value': 'gm', 'flag': 'gm', 'text': 'Gambia'},
    {'key': 'gn', 'value': 'gn', 'flag': 'gn', 'text': 'Guinea'},
    {'key': 'gp', 'value': 'gp', 'flag': 'gp', 'text': 'Guadeloupe'},
    {'key': 'gq', 'value': 'gq', 'flag': 'gq', 'text': 'Equatorial Guinea'},
    {'key': 'gr', 'value': 'gr', 'flag': 'gr', 'text': 'Greece'},
    {'key': 'gs', 'value': 'gs', 'flag': 'gs', 'text': 'Sandwich Islands'},
    {'key': 'gt', 'value': 'gt', 'flag': 'gt', 'text': 'Guatemala'},
    {'key': 'gu', 'value': 'gu', 'flag': 'gu', 'text': 'Guam'},
    {'key': 'gw', 'value': 'gw', 'flag': 'gw', 'text': 'Guinea-bissau'},
    {'key': 'gy', 'value': 'gy', 'flag': 'gy', 'text': 'Guyana'},
    {'key': 'hk', 'value': 'hk', 'flag': 'hk', 'text': 'Hong Kong'},
    {'key': 'hm', 'value': 'hm', 'flag': 'hm', 'text': 'Heard Island'},
    {'key': 'hn', 'value': 'hn', 'flag': 'hn', 'text': 'Honduras'},
    {'key': 'hr', 'value': 'hr', 'flag': 'hr', 'text': 'Croatia'},
    {'key': 'ht', 'value': 'ht', 'flag': 'ht', 'text': 'Haiti'},
    {'key': 'hu', 'value': 'hu', 'flag': 'hu', 'text': 'Hungary'},
    {'key': 'id', 'value': 'id', 'flag': 'id', 'text': 'Indonesia'},
    {'key': 'ie', 'value': 'ie', 'flag': 'ie', 'text': 'Ireland'},
    {'key': 'il', 'value': 'il', 'flag': 'il', 'text': 'Israel'},
    {'key': 'in', 'value': 'in', 'flag': 'in', 'text': 'India'},
    {'key': 'io', 'value': 'io', 'flag': 'io', 'text': 'Indian Ocean Territory'},
    {'key': 'iq', 'value': 'iq', 'flag': 'iq', 'text': 'Iraq'},
    {'key': 'ir', 'value': 'ir', 'flag': 'ir', 'text': 'Iran'},
    {'key': 'is', 'value': 'is', 'flag': 'is', 'text': 'Iceland'},
    {'key': 'it', 'value': 'it', 'flag': 'it', 'text': 'Italy'},
    {'key': 'jm', 'value': 'jm', 'flag': 'jm', 'text': 'Jamaica'},
    {'key': 'jo', 'value': 'jo', 'flag': 'jo', 'text': 'Jordan'},
    {'key': 'jp', 'value': 'jp', 'flag': 'jp', 'text': 'Japan'},
    {'key': 'ke', 'value': 'ke', 'flag': 'ke', 'text': 'Kenya'},
    {'key': 'kg', 'value': 'kg', 'flag': 'kg', 'text': 'Kyrgyzstan'},
    {'key': 'kh', 'value': 'kh', 'flag': 'kh', 'text': 'Cambodia'},
    {'key': 'ki', 'value': 'ki', 'flag': 'ki', 'text': 'Kiribati'},
    {'key': 'km', 'value': 'km', 'flag': 'km', 'text': 'Comoros'},
    {'key': 'kn', 'value': 'kn', 'flag': 'kn', 'text': 'Saint Kitts And Nevis'},
    {'key': 'kp', 'value': 'kp', 'flag': 'kp', 'text': 'North Korea'},
    {'key': 'kr', 'value': 'kr', 'flag': 'kr', 'text': 'South Korea'},
    {'key': 'kw', 'value': 'kw', 'flag': 'kw', 'text': 'Kuwait'},
    {'key': 'ky', 'value': 'ky', 'flag': 'ky', 'text': 'Cayman Islands'},
    {'key': 'kz', 'value': 'kz', 'flag': 'kz', 'text': 'Kazakhstan'},
    {'key': 'la', 'value': 'la', 'flag': 'la', 'text': 'Laos'},
    {'key': 'lb', 'value': 'lb', 'flag': 'lb', 'text': 'Lebanon'},
    {'key': 'lc', 'value': 'lc', 'flag': 'lc', 'text': 'Saint Lucia'},
    {'key': 'li', 'value': 'li', 'flag': 'li', 'text': 'Liechtenstein'},
    {'key': 'lk', 'value': 'lk', 'flag': 'lk', 'text': 'Sri Lanka'},
    {'key': 'lr', 'value': 'lr', 'flag': 'lr', 'text': 'Liberia'},
    {'key': 'ls', 'value': 'ls', 'flag': 'ls', 'text': 'Lesotho'},
    {'key': 'lt', 'value': 'lt', 'flag': 'lt', 'text': 'Lithuania'},
    {'key': 'lu', 'value': 'lu', 'flag': 'lu', 'text': 'Luxembourg'},
    {'key': 'lv', 'value': 'lv', 'flag': 'lv', 'text': 'Latvia'},
    {'key': 'ly', 'value': 'ly', 'flag': 'ly', 'text': 'Libya'},
    {'key': 'ma', 'value': 'ma', 'flag': 'ma', 'text': 'Morocco'},
    {'key': 'mc', 'value': 'mc', 'flag': 'mc', 'text': 'Monaco'},
    {'key': 'md', 'value': 'md', 'flag': 'md', 'text': 'Moldova'},
    {'key': 'me', 'value': 'me', 'flag': 'me', 'text': 'Montenegro'},
    {'key': 'mg', 'value': 'mg', 'flag': 'mg', 'text': 'Madagascar'},
    {'key': 'mh', 'value': 'mh', 'flag': 'mh', 'text': 'Marshall Islands'},
    {'key': 'mk', 'value': 'mk', 'flag': 'mk', 'text': 'Macedonia'},
    {'key': 'ml', 'value': 'ml', 'flag': 'ml', 'text': 'Mali'},
    {'key': 'mm', 'value': 'mm', 'flag': 'mm', 'text': 'Burma'},
    {'key': 'mn', 'value': 'mn', 'flag': 'mn', 'text': 'Mongolia'},
    {'key': 'mo', 'value': 'mo', 'flag': 'mo', 'text': 'Macau'},
    {'key': 'mp', 'value': 'mp', 'flag': 'mp', 'text': 'Northern Mariana Islands'},
    {'key': 'mq', 'value': 'mq', 'flag': 'mq', 'text': 'Martinique'},
    {'key': 'mr', 'value': 'mr', 'flag': 'mr', 'text': 'Mauritania'},
    {'key': 'ms', 'value': 'ms', 'flag': 'ms', 'text': 'Montserrat'},
    {'key': 'mt', 'value': 'mt', 'flag': 'mt', 'text': 'Malta'},
    {'key': 'mu', 'value': 'mu', 'flag': 'mu', 'text': 'Mauritius'},
    {'key': 'mv', 'value': 'mv', 'flag': 'mv', 'text': 'Maldives'},
    {'key': 'mw', 'value': 'mw', 'flag': 'mw', 'text': 'Malawi'},
    {'key': 'mx', 'value': 'mx', 'flag': 'mx', 'text': 'Mexico'},
    {'key': 'my', 'value': 'my', 'flag': 'my', 'text': 'Malaysia'},
    {'key': 'mz', 'value': 'mz', 'flag': 'mz', 'text': 'Mozambique'},
    {'key': 'na', 'value': 'na', 'flag': 'na', 'text': 'Namibia'},
    {'key': 'nc', 'value': 'nc', 'flag': 'nc', 'text': 'New Caledonia'},
    {'key': 'ne', 'value': 'ne', 'flag': 'ne', 'text': 'Niger'},
    {'key': 'nf', 'value': 'nf', 'flag': 'nf', 'text': 'Norfolk Island'},
    {'key': 'ng', 'value': 'ng', 'flag': 'ng', 'text': 'Nigeria'},
    {'key': 'ni', 'value': 'ni', 'flag': 'ni', 'text': 'Nicaragua'},
    {'key': 'nl', 'value': 'nl', 'flag': 'nl', 'text': 'Netherlands'},
    {'key': 'no', 'value': 'no', 'flag': 'no', 'text': 'Norway'},
    {'key': 'np', 'value': 'np', 'flag': 'np', 'text': 'Nepal'},
    {'key': 'nr', 'value': 'nr', 'flag': 'nr', 'text': 'Nauru'},
    {'key': 'nu', 'value': 'nu', 'flag': 'nu', 'text': 'Niue'},
    {'key': 'nz', 'value': 'nz', 'flag': 'nz', 'text': 'New Zealand'},
    {'key': 'om', 'value': 'om', 'flag': 'om', 'text': 'Oman'},
    {'key': 'pa', 'value': 'pa', 'flag': 'pa', 'text': 'Panama'},
    {'key': 'pe', 'value': 'pe', 'flag': 'pe', 'text': 'Peru'},
    {'key': 'pf', 'value': 'pf', 'flag': 'pf', 'text': 'French Polynesia'},
    {'key': 'pg', 'value': 'pg', 'flag': 'pg', 'text': 'New Guinea'},
    {'key': 'ph', 'value': 'ph', 'flag': 'ph', 'text': 'Philippines'},
    {'key': 'pk', 'value': 'pk', 'flag': 'pk', 'text': 'Pakistan'},
    {'key': 'pl', 'value': 'pl', 'flag': 'pl', 'text': 'Poland'},
    {'key': 'pm', 'value': 'pm', 'flag': 'pm', 'text': 'Saint Pierre'},
    {'key': 'pn', 'value': 'pn', 'flag': 'pn', 'text': 'Pitcairn Islands'},
    {'key': 'pr', 'value': 'pr', 'flag': 'pr', 'text': 'Puerto Rico'},
    {'key': 'ps', 'value': 'ps', 'flag': 'ps', 'text': 'Palestine'},
    {'key': 'pt', 'value': 'pt', 'flag': 'pt', 'text': 'Portugal'},
    {'key': 'pw', 'value': 'pw', 'flag': 'pw', 'text': 'Palau'},
    {'key': 'py', 'value': 'py', 'flag': 'py', 'text': 'Paraguay'},
    {'key': 'qa', 'value': 'qa', 'flag': 'qa', 'text': 'Qatar'},
    {'key': 're', 'value': 're', 'flag': 're', 'text': 'Reunion'},
    {'key': 'ro', 'value': 'ro', 'flag': 'ro', 'text': 'Romania'},
    {'key': 'rs', 'value': 'rs', 'flag': 'rs', 'text': 'Serbia'},
    {'key': 'ru', 'value': 'ru', 'flag': 'ru', 'text': 'Russia'},
    {'key': 'rw', 'value': 'rw', 'flag': 'rw', 'text': 'Rwanda'},
    {'key': 'sa', 'value': 'sa', 'flag': 'sa', 'text': 'Saudi Arabia'},
    {'key': 'sb', 'value': 'sb', 'flag': 'sb', 'text': 'Solomon Islands'},
    {'key': 'sc', 'value': 'sc', 'flag': 'sc', 'text': 'Seychelles'},
    {'key': 'sd', 'value': 'sd', 'flag': 'sd', 'text': 'Sudan'},
    {'key': 'se', 'value': 'se', 'flag': 'se', 'text': 'Sweden'},
    {'key': 'sg', 'value': 'sg', 'flag': 'sg', 'text': 'Singapore'},
    {'key': 'sh', 'value': 'sh', 'flag': 'sh', 'text': 'Saint Helena'},
    {'key': 'si', 'value': 'si', 'flag': 'si', 'text': 'Slovenia'},
    {'key': 'sj', 'value': 'sj', 'flag': 'sj', 'text': 'Jan Mayen'},
    {'key': 'sk', 'value': 'sk', 'flag': 'sk', 'text': 'Slovakia'},
    {'key': 'sl', 'value': 'sl', 'flag': 'sl', 'text': 'Sierra Leone'},
    {'key': 'sm', 'value': 'sm', 'flag': 'sm', 'text': 'San Marino'},
    {'key': 'sn', 'value': 'sn', 'flag': 'sn', 'text': 'Senegal'},
    {'key': 'so', 'value': 'so', 'flag': 'so', 'text': 'Somalia'},
    {'key': 'sr', 'value': 'sr', 'flag': 'sr', 'text': 'Suriname'},
    {'key': 'st', 'value': 'st', 'flag': 'st', 'text': 'Sao Tome'},
    {'key': 'sv', 'value': 'sv', 'flag': 'sv', 'text': 'El Salvador'},
    {'key': 'sy', 'value': 'sy', 'flag': 'sy', 'text': 'Syria'},
    {'key': 'sz', 'value': 'sz', 'flag': 'sz', 'text': 'Swaziland'},
    {'key': 'tc', 'value': 'tc', 'flag': 'tc', 'text': 'Caicos Islands'},
    {'key': 'td', 'value': 'td', 'flag': 'td', 'text': 'Chad'},
    {'key': 'tf', 'value': 'tf', 'flag': 'tf', 'text': 'French Territories'},
    {'key': 'tg', 'value': 'tg', 'flag': 'tg', 'text': 'Togo'},
    {'key': 'th', 'value': 'th', 'flag': 'th', 'text': 'Thailand'},
    {'key': 'tj', 'value': 'tj', 'flag': 'tj', 'text': 'Tajikistan'},
    {'key': 'tk', 'value': 'tk', 'flag': 'tk', 'text': 'Tokelau'},
    {'key': 'tl', 'value': 'tl', 'flag': 'tl', 'text': 'Timorleste'},
    {'key': 'tm', 'value': 'tm', 'flag': 'tm', 'text': 'Turkmenistan'},
    {'key': 'tn', 'value': 'tn', 'flag': 'tn', 'text': 'Tunisia'},
    {'key': 'to', 'value': 'to', 'flag': 'to', 'text': 'Tonga'},
    {'key': 'tr', 'value': 'tr', 'flag': 'tr', 'text': 'Turkey'},
    {'key': 'tt', 'value': 'tt', 'flag': 'tt', 'text': 'Trinidad'},
    {'key': 'tv', 'value': 'tv', 'flag': 'tv', 'text': 'Tuvalu'},
    {'key': 'tw', 'value': 'tw', 'flag': 'tw', 'text': 'Taiwan'},
    {'key': 'tz', 'value': 'tz', 'flag': 'tz', 'text': 'Tanzania'},
    {'key': 'ua', 'value': 'ua', 'flag': 'ua', 'text': 'Ukraine'},
    {'key': 'ug', 'value': 'ug', 'flag': 'ug', 'text': 'Uganda'},
    {'key': 'um', 'value': 'um', 'flag': 'um', 'text': 'Us Minor Islands'},
    {'key': 'us', 'value': 'us', 'flag': 'us', 'text': 'United States'},
    {'key': 'uy', 'value': 'uy', 'flag': 'uy', 'text': 'Uruguay'},
    {'key': 'uz', 'value': 'uz', 'flag': 'uz', 'text': 'Uzbekistan'},
    {'key': 'va', 'value': 'va', 'flag': 'va', 'text': 'Vatican City'},
    {'key': 'vc', 'value': 'vc', 'flag': 'vc', 'text': 'Saint Vincent'},
    {'key': 've', 'value': 've', 'flag': 've', 'text': 'Venezuela'},
    {'key': 'vg', 'value': 'vg', 'flag': 'vg', 'text': 'British Virgin Islands'},
    {'key': 'vi', 'value': 'vi', 'flag': 'vi', 'text': 'Us Virgin Islands'},
    {'key': 'vn', 'value': 'vn', 'flag': 'vn', 'text': 'Vietnam'},
    {'key': 'vu', 'value': 'vu', 'flag': 'vu', 'text': 'Vanuatu'},
    {'key': 'wf', 'value': 'wf', 'flag': 'wf', 'text': 'Wallis And Futuna'},
    {'key': 'ws', 'value': 'ws', 'flag': 'ws', 'text': 'Samoa'},
    {'key': 'ye', 'value': 'ye', 'flag': 'ye', 'text': 'Yemen'},
    {'key': 'yt', 'value': 'yt', 'flag': 'yt', 'text': 'Mayotte'},
    {'key': 'za', 'value': 'za', 'flag': 'za', 'text': 'South Africa'},
    {'key': 'zm', 'value': 'zm', 'flag': 'zm', 'text': 'Zambia'},
    {'key': 'zw', 'value': 'zw', 'flag': 'zw', 'text': 'Zimbabwe'},
]


const CountryDropdown = () => (
    <Dropdown placeholder='Select Country' fluid multiple search selection options={countryOptions} />
)

export default CountryDropdown
