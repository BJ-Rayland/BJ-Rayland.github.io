var abbSim1 = [
	[26.75846, 39.00232, -11.17895, -1.323231, 65.84667, 29.61177],
	[26.75846, 39.00232, -11.17895, -1.323231, 65.84667, 29.61177],
	[26.75846, 39.00232, -11.17895, -1.323231, 65.84667, 29.61177],
	[26.75846, 39.00232, -11.17895, -1.323231, 65.84667, 29.61177],
	[26.75846, 39.00232, -11.17895, -1.323231, 65.84667, 29.61177],
	[26.75846, 39.0021, -11.17933, -1.323231, 65.84667, 29.61045],
	[27.52482, 38.75314, -10.36568, -1.326637, 65.3763, 30.14505],
	[31.95958, 37.46973, -5.301804, -0.9937515, 61.59604, 34.72261],
	[31.95708, 37.46973, -5.305936, -0.9901259, 61.59604, 34.72668],
	[31.91063, 37.47091, -5.330085, -0.9901259, 61.59938, 34.72393],
	[27.24317, 38.18425, -9.738757, -1.328065, 65.36144, 30.00871],
	[30.06257, 29.19648, 5.14973, -1.778175, 62.635, 32.73211],
	[33.7113, 21.68279, 17.29441, -1.790919, 60.9178, 36.03196],
	[33.58614, 19.5726, 34.94917, -2.302663, 46.15066, 36.6316],
	[33.33745, 20.95987, 37.08971, -2.531837, 42.60057, 36.60248],
	[33.33373, 21.34453, 37.12038, -2.561281, 42.20915, 36.61061],
	[33.33337, 21.34453, 37.11625, -2.562929, 42.21702, 36.61621],
	[33.33337, 21.34439, 37.11391, -2.562929, 42.2223, 36.61841],
	[33.33337, 21.34421, 37.11304, -2.562379, 42.22531, 36.61896],
	[33.33337, 21.34403, 37.11238, -2.562379, 42.22725, 36.6194],
	[33.33337, 21.3438, 37.11184, -2.562379, 42.22876, 36.6194],
	[33.33337, 21.3438, 37.11168, -2.562379, 42.22951, 36.6194],
	[33.34117, 21.03941, 37.04957, -2.556337, 42.47444, 36.61567],
	[34.61132, 19.43631, 23.78842, -1.798939, 57.5297, 36.91032],
	[35.08628, 27.13913, 22.21558, -1.767189, 51.41386, 37.54423],
	[35.09626, 27.59057, 22.38331, -1.787733, 50.75436, 37.58718],
	[35.09867, 27.6475, 22.41083, -1.802565, 50.66141, 37.59861],
	[35.09867, 27.64714, 22.41322, -1.803883, 50.66001, 37.59916],
	[35.09867, 27.64646, 22.41339, -1.804213, 50.66001, 37.59916],
	[35.09867, 27.64573, 22.4136, -1.804542, 50.66001, 37.59861],
	[35.09899, 27.34737, 22.33621, -1.801576, 50.87252, 37.59576],
	[35.04982, 22.51362, 20.38537, -1.679848, 57.81319, 37.10269],
	[35.94907, 17.6306, 24.30956, -6.563051, 60.20024, -12.98156],
	[33.19867, 18.36773, 21.4306, -10.9344, 60.14251, -58.75258],
	[31.36268, 26.10151, 9.760508, -11.82364, 59.60224, -107.8771],
	[31.93497, 32.53583, 0.1229956, -10.30027, 60.61923, -134.4593],
	[32.17286, 34.61583, -0.8864413, -9.991005, 59.42409, -138.6198],
	[32.17481, 35.78524, 0.2276376, -10.24666, 57.16866, -138.0785],
	[32.17481, 37.06905, 1.166153, -10.52802, 54.96848, -137.5739],
	[32.17445, 38.33924, 1.882929, -10.8007, 53.01109, -137.1109],
	[32.17399, 39.52041, 2.408152, -11.05613, 51.31757, -136.696],
	[32.17286, 39.86875, 2.522149, -11.12128, 50.86045, -136.5834],
	[32.17031, 39.93217, 2.552823, -11.13776, 50.77871, -136.5606],
	[32.16936, 39.93317, 2.557392, -11.14061, 50.7759, -136.5583],
	[32.16927, 39.9334, 2.558425, -11.14215, 50.77569, -136.558],
	[32.16927, 39.918, 2.557174, -11.14281, 50.77698, -136.5583],
	[32.16904, 35.13223, -0.3529517, -10.17338, 58.50102, -138.261],
	[30.95274, 35.6411, -4.863546, -8.761855, 64.92145, -96.33582],
	[29.04325, 37.63689, -8.409629, -5.073525, 67.69604, -42.07841],
	[27.23809, 38.77293, -10.67297, -1.793556, 66.81874, 12.13692],
	[25.28202, 40.66426, -12.60244, -4.941359, 63.80257, 3.827518],
	[25.50179, 48.78043, -24.04252, -7.940627, 60.88074, -43.73383],
	[33.38639, 61.7438, -43.97439, -2.73025, 60.2808, -111.5126],
	[38.35575, 62.00188, -42.59979, 1.302721, 58.13082, -140.9724],
	[38.72062, 64.78165, -38.25209, 1.692406, 50.9435, -142.6426],
	[38.7168, 65.00692, -38.11117, 1.692955, 50.57341, -142.6365],
	[38.71122, 65.24045, -37.98874, 1.695482, 50.22088, -142.6329],
	[38.70877, 65.48296, -37.87757, 1.703831, 49.86889, -142.6323],
	[38.70754, 65.65592, -37.80235, 1.713829, 49.62148, -142.634],
	[38.70713, 65.65592, -37.80235, 1.7135, 49.61954, -142.6357],
	[38.70681, 65.6557, -37.80235, 1.7135, 49.61922, -142.636],
	[38.70681, 65.65539, -37.80246, 1.7135, 49.62008, -142.6365],
	[38.70681, 65.65493, -37.80273, 1.7135, 49.62084, -142.6368],
	[38.70713, 65.65462, -37.80273, 1.7135, 49.62148, -142.6376],
	[38.70713, 65.65421, -37.80301, 1.7135, 49.62234, -142.6383],
	[38.70754, 65.54216, -37.8215, 1.714488, 49.66543, -142.6376],
	[38.70754, 61.72836, -41.27169, 1.577269, 56.98932, -142.4219],
	[38.00169, 46.71518, -19.22741, 1.87368, 50.18932, -143.3986],
	[37.85642, 45.39923, -14.86094, 2.022215, 46.97334, -143.7293],
	[37.85483, 46.53005, -13.87669, 2.104613, 44.85708, -143.8455],
	[37.85338, 47.71789, -13.07936, 2.184813, 42.87759, -143.9588],
	[37.85247, 48.21654, -12.80269, 2.218541, 42.09886, -144.0072],
	[37.85197, 48.4769, -12.67227, 2.234142, 41.70637, -144.0314],
	[37.85152, 48.74261, -12.5481, 2.253807, 41.31172, -144.056],
	[37.8512, 49.01346, -12.42829, 2.276768, 40.92289, -144.0801],
	[37.85084, 49.06271, -12.40506, 2.285997, 40.84836, -144.0866],
	[37.85079, 49.06271, -12.40485, 2.282811, 40.84868, -144.0879],
	[37.85079, 49.06253, -12.40485, 2.281053, 40.84922, -144.0879],
	[37.85079, 49.06226, -12.40506, 2.278966, 40.84954, -144.0876],
	[37.85152, 48.88076, -12.46119, 2.277647, 40.96167, -144.0854],
	[37.85315, 44.45654, -16.03588, 1.967833, 49.10437, -143.6849],
	[37.85737, 44.4278, -16.06944, 1.964427, 49.16005, -143.6446],
	[37.57314, 42.57551, -12.96085, 2.061327, 47.88607, -138.549],
	[38.31957, 29.12081, 9.629324, 2.447276, 38.53649, -87.54501],
	[43.05731, 23.65583, 17.64962, 0.6337633, 35.63955, -41.77936],
	[48.02531, 23.93144, 15.99965, -1.608436, 36.90394, 3.967265],
	[48.61258, 31.37359, 1.52533, -2.030861, 44.16386, 64.92677],
	[38.73936, 37.30848, -10.74912, 1.121666, 50.85292, 125.4576],
	[37.81625, 36.34904, -7.185142, 1.345458, 46.51483, 129.0707],
	[37.96728, 35.37974, -2.629841, 1.208019, 40.49679, 128.7402],
	[38.10302, 34.76528, 1.28015, 1.084862, 35.00869, 128.5077],
	[38.22178, 34.43165, 4.639845, 0.9678575, 29.96769, 128.3261],
	[38.34921, 34.32192, 8.071876, 0.8151475, 24.45126, 128.1661],
	[38.43661, 34.49171, 10.82857, 0.686168, 19.83183, 128.0474],
	[38.42875, 34.52427, 10.91108, 0.7056138, 19.72359, 128.0294],
	[38.42567, 34.52748, 10.91391, 0.7109971, 19.74071, 128.0281],
	[38.42526, 34.52808, 10.91472, 0.7113267, 19.75041, 128.0281],
	[38.42489, 34.5268, 10.91277, 0.711876, 19.75375, 128.028],
	[37.8961, 35.9169, -4.811171, 1.21472, 43.43704, 128.7526],
	[34.52057, 37.35133, -10.51313, 4.488536, 54.9436, 101.5472],
	[27.61081, 38.80911, -11.14104, 0.2332017, 65.13159, 37.65343],
	[31.71552, 38.38677, -7.62291, -3.200136, 59.06305, 64.42348],
	[40.827, 35.42877, 0.6236349, -9.86642, 52.24064, 113.649],
	[47.43, 36.01164, 4.065619, -14.24172, 50.22185, 142.4233],
	[47.56152, 40.05379, 5.679412, -15.63622, 44.58166, 144.6962],
	[47.54205, 40.45284, 5.744569, -15.74619, 44.13682, 144.8469],
	[47.53578, 40.53297, 5.768391, -15.77608, 44.04086, 144.8853],
	[47.53519, 40.53333, 5.771056, -15.7808, 44.04247, 144.8843],
	[47.53492, 40.53333, 5.771437, -15.78223, 44.04322, 144.8843],
	[47.53492, 40.53333, 5.771817, -15.78267, 44.0442, 144.8839],
	[47.53492, 40.53333, 5.771817, -15.78267, 44.04473, 144.8834],
	[47.53492, 40.53319, 5.772089, -15.78223, 44.04635, 144.8834],
	[47.53492, 40.53319, 5.771817, -15.78223, 44.04689, 144.8828],
	[47.54677, 39.15772, 5.461862, -15.3698, 45.63171, 144.3167],
	[45.77407, 34.79306, 3.55383, -13.99354, 51.46201, 140.4698],
	[36.65655, 34.66813, 1.363961, -13.46565, 51.95532, 130.746],
	[34.04262, 38.02881, 2.019279, -14.15977, 47.55045, 129.338],
	[33.95541, 38.99506, 2.438391, -14.48991, 46.19805, 129.7011],
	[33.89762, 39.30622, 2.538302, -14.58922, 45.7879, 129.8118],
	[33.84001, 39.60576, 2.613139, -14.65998, 45.40596, 129.8974],
	[33.82716, 39.67331, 2.640279, -14.70271, 45.31161, 129.9198],
	[33.82698, 39.67508, 2.646207, -14.71381, 45.30644, 129.9217],
	[33.82698, 39.67544, 2.647186, -14.71633, 45.30504, 129.9217],
	[33.82698, 39.67544, 2.647676, -14.71765, 45.30504, 129.9217],
	[33.82698, 39.67544, 2.647676, -14.71842, 45.30558, 129.9217],
	[33.82698, 39.67544, 2.647676, -14.71842, 45.30558, 129.9211],
	[33.82698, 39.6753, 2.647567, -14.71886, 45.3059, 129.9211],
	[33.82698, 39.6753, 2.647458, -14.71886, 45.30644, 129.9211],
	[33.95686, 35.15343, 0.05615299, -13.27317, 52.25453, 127.7855],
	[33.95323, 35.11298, 0.004647785, -13.20593, 52.33683, 127.7428],
	[33.98279, 35.09809, -0.02798487, -13.16693, 52.342, 127.7388],
	[38.87343, 36.3459, -11.50228, -3.365041, 56.70702, 133.8988],
	[39.61201, 42.99018, -5.319534, -2.769032, 42.91917, 135.8454],
	[39.6082, 43.92747, -4.827922, -2.895155, 41.53823, 135.9454],
	[39.60302, 44.16899, -4.728176, -2.929433, 41.19701, 135.9762],
	[39.60125, 44.17003, -4.720996, -2.933497, 41.18538, 135.9767],
	[39.60093, 44.17049, -4.719202, -2.934816, 41.18226, 135.9762],
	[39.60093, 44.17049, -4.718386, -2.935585, 41.18064, 135.9762],
	[39.6022, 41.5167, -6.148458, -2.754201, 45.03932, 135.744],
	[38.45218, 36.48977, -12.59172, -1.104713, 57.39399, 126.1409],
	[31.34162, 37.37708, -11.04575, 2.154051, 62.38695, 68.64465],
	[27.1245, 38.85124, -11.00561, -1.023085, 65.65635, 31.86012],
	[28.74353, 37.83905, -5.868632, -1.240285, 61.77063, 31.59623],
	[28.74531, 37.83591, -5.869992, -1.238087, 61.75545, 31.63062],
	[28.74553, 37.83546, -5.870536, -1.237538, 61.75383, 31.63424],
	[28.74553, 37.83541, -5.871624, -1.236769, 61.75319, 31.63502],
	[26.7728, 38.99275, -11.16758, -1.31598, 65.7953, 29.65484],
	[26.75682, 39.0021, -11.18819, -1.319386, 65.84796, 29.61177],
	[26.7576, 39.00255, -11.1852, -1.321583, 65.85001, 29.60463],
	[26.75769, 39.00255, -11.18455, -1.322792, 65.85033, 29.60353],
	[26.75787, 39.00255, -11.1834, -1.323012, 65.85001, 29.60309],
	[26.75809, 39.00232, -11.18259, -1.323012, 65.85001, 29.60309],
	[26.75828, 39.00232, -11.1821, -1.323231, 65.85001, 29.60309],
	[26.75828, 39.00232, -11.18145, -1.323231, 65.84937, 29.60309],
	[26.75828, 39.00232, -11.18107, -1.323231, 65.84937, 29.60353]
];
var abbSim2 = [
	[19.09159, 23.80987, 14.40288, 1.925971, 54.22152, 114.146],
	[19.09159, 23.80987, 14.40288, 1.925971, 54.22152, 114.146],
	[19.09159, 23.80987, 14.40288, 1.925971, 54.22152, 114.146],
	[19.09164, 23.80987, 14.40288, 1.925971, 54.22152, 114.146],
	[19.09159, 23.80987, 14.40288, 1.925971, 54.22152, 114.146],
	[19.09164, 23.80987, 14.40288, 1.925971, 54.22152, 114.146],
	[19.09164, 23.80987, 14.40288, 1.925971, 54.22152, 114.146],
	[19.09159, 23.80987, 14.40288, 1.925971, 54.22152, 114.146],
	[19.09164, 23.80987, 14.40288, 1.925971, 54.22152, 114.146],
	[19.09164, 23.80987, 14.40288, 1.925971, 54.22152, 114.146],
	[19.09164, 23.80987, 14.40288, 1.925971, 54.22152, 114.146],
	[19.0915, 23.80987, 14.40288, 1.925971, 54.22152, 114.1454],
	[25.93739, 21.07836, 18.95307, 2.338288, 52.24593, 120.6703],
	[25.9723, 21.06519, 18.97499, 2.333235, 52.19498, 120.7175],
	[25.96899, 21.06687, 18.97058, 2.332466, 52.1925, 120.7169],
	[25.43492, 21.21292, 18.74732, 2.333894, 52.22696, 120.4219],
	[20.86625, 17.03775, 26.14651, 0.9671947, 53.6288, 77.70212],
	[21.25676, 16.90505, 30.46462, -5.148674, 52.99634, 30.41422],
	[21.36181, 23.73832, 32.09642, -6.585576, 44.57338, 27.56436],
	[21.35232, 24.1859, 32.16739, -6.642815, 44.07005, 27.70465],
	[21.3427, 24.63407, 32.22945, -6.69522, 43.56888, 27.81177],
	[21.33575, 25.08996, 32.2865, -6.761797, 43.06523, 27.90186],
	[21.3303, 25.4619, 32.32974, -6.819585, 42.64883, 27.97272],
	[21.3303, 25.46172, 32.33192, -6.817937, 42.64668, 27.97141],
	[21.3303, 25.46136, 32.33192, -6.817278, 42.64668, 27.97141],
	[21.33053, 25.46099, 32.33192, -6.817278, 42.64668, 27.97141],
	[21.33053, 25.4605, 32.33148, -6.817278, 42.64678, 27.97141],
	[21.33053, 25.46013, 32.33126, -6.817278, 42.647, 27.97141],
	[21.33053, 25.45991, 32.33105, -6.816838, 42.647, 27.97141],
	[21.3451, 25.01396, 32.28226, -6.779485, 42.95623, 27.94559],
	[21.74797, 18.47487, 29.09813, -5.694805, 52.85524, 26.80674],
	[24.66624, 28.94639, 17.76285, -4.621221, 53.80469, 29.48389],
	[24.75173, 31.51514, 18.09342, -4.821392, 50.96989, 29.87292],
	[24.7619, 31.60281, 18.07009, -4.820952, 50.80068, 29.88753],
	[24.7619, 31.60013, 18.06922, -4.816008, 50.80316, 29.88698],
	[24.76167, 31.59818, 18.06835, -4.813921, 50.80779, 29.88698],
	[24.76144, 31.59718, 18.0678, -4.813371, 50.8135, 29.88698],
	[24.72803, 30.87703, 18.11778, -4.79063, 51.28419, 29.84084],
	[24.66357, 26.17833, 16.5977, -4.42863, 57.66757, 29.1354],
	[24.66175, 26.18287, 16.5983, -4.430388, 57.6735, 29.12288],
	[26.50246, 23.51397, 19.73968, -4.299651, 56.92028, -9.173482],
	[25.13638, 28.80624, 12.75189, -4.346782, 57.91929, -58.6035],
	[25.0183, 31.74567, 12.98581, -4.446758, 54.71774, -60.9315],
	[25.01717, 32.068, 13.13336, -4.478618, 54.24813, -60.8223],
	[25.01676, 32.3945, 13.2658, -4.510478, 53.80124, -60.7522],
	[25.01631, 32.72881, 13.38469, -4.540471, 53.34467, -60.70013],
	[25.01558, 33.04955, 13.4852, -4.570903, 52.91157, -60.6519],
	[25.01558, 33.05164, 13.49363, -4.571672, 52.90607, -60.65157],
	[25.0154, 33.05214, 13.49586, -4.571124, 52.90435, -60.65157],
	[25.01558, 33.05228, 13.49651, -4.571124, 52.90435, -60.65157],
	[25.01336, 30.34024, 12.42523, -4.385125, 56.72609, -60.95589],
	[23.24978, 28.60931, 11.69715, -0.7214039, 60.0335, -18.94901],
	[21.12306, 26.84977, 12.52596, 3.126887, 58.88069, 33.62321],
	[19.69034, 24.89266, 13.78917, 3.599079, 55.80517, 82.74934],
	[19.80112, 24.05574, 14.35921, 2.174812, 54.44674, 110.4862],
	[25.88237, 33.82958, 3.952763, 0.9819164, 61.1624, 61.15462],
	[28.07287, 46.81252, -13.9729, -2.095134, 68.45701, 31.22841],
	[28.13597, 51.66974, -12.69495, -2.324858, 62.37435, 30.33885],
	[28.12144, 51.90254, -12.48567, -2.336943, 61.91109, 30.39202],
	[28.10737, 52.11496, -12.32968, -2.340898, 61.54294, 30.43047],
	[28.10669, 52.11492, -12.32805, -2.337932, 61.53928, 30.43432],
	[28.10669, 52.11446, -12.32805, -2.337383, 61.53842, 30.43465],
	[28.10669, 52.11423, -12.32805, -2.337932, 61.53842, 30.43476],
	[28.10673, 52.11396, -12.32805, -2.337932, 61.53874, 30.43476],
	[28.10673, 52.1136, -12.32827, -2.338152, 61.53928, 30.43476],
	[28.10687, 52.11324, -12.32827, -2.338152, 61.53949, 30.43476],
	[28.10737, 52.08205, -12.33376, -2.338152, 61.54197, 30.43476],
	[28.00277, 46.53027, -13.47471, -2.264214, 68.21218, 30.13186],
	[26.0349, 36.10888, 3.615777, -2.786724, 61.79725, 28.62652],
	[25.93122, 38.91371, 5.671906, -2.961187, 56.62645, 28.77637],
	[25.90847, 39.17842, 5.888913, -2.981401, 56.12819, 28.82152],
	[25.90775, 39.18855, 5.915672, -2.996673, 56.17634, 28.82943],
	[25.90797, 39.18614, 5.902347, -2.994036, 56.17634, 28.829],
	[25.90797, 39.18546, 5.899084, -2.991619, 56.17634, 28.829],
	[25.90811, 39.18496, 5.897615, -2.99063, 56.17634, 28.829],
	[26.01534, 35.17654, 3.211513, -2.768047, 62.92819, 28.56829],
	[26.02069, 35.15248, 3.18992, -2.760247, 62.96901, 28.53138],
	[26.11412, 35.07162, 3.275853, -2.754424, 62.96169, 28.27331],
	[27.75826, 30.46595, 9.918883, -3.128948, 59.15622, -22.97231],
	[26.36663, 34.79002, 5.153646, -2.723113, 58.40096, -60.83867],
	[26.34002, 36.5561, 5.887771, -2.730913, 55.70888, -60.92908],
	[26.33848, 36.86253, 6.025753, -2.745525, 55.28019, -60.84833],
	[26.33784, 37.17287, 6.151117, -2.76563, 54.84699, -60.80263],
	[26.33784, 37.48735, 6.263536, -2.783428, 54.42219, -60.77022],
	[26.3373, 37.78448, 6.350828, -2.800347, 53.99652, -60.74341],
	[26.3373, 37.78938, 6.36845, -2.800347, 53.99727, -60.74287],
	[26.3373, 37.7901, 6.371768, -2.800347, 54.0004, -60.74287],
	[26.33762, 37.79033, 6.372584, -2.800347, 54.00373, -60.74287],
	[26.33862, 36.13426, 5.80706, -2.766179, 56.30053, -60.82339],
	[25.16018, 33.09972, 5.924755, -0.9943042, 59.84254, -34.84161],
	[22.38331, 29.51477, 9.226799, 2.78719, 58.8919, 24.53136],
	[20.21724, 25.93323, 12.56131, 3.483723, 55.83005, 78.74098],
	[18.49034, 27.48806, 10.05382, 3.612922, 55.62842, 110.7201],
	[16.46227, 44.01064, -12.49551, 9.671443, 64.81611, 102.7214],
	[16.55534, 46.3017, -14.46625, 10.40851, 64.99739, 101.9398],
	[16.86931, 46.52097, -13.46987, 10.54716, 63.73116, 101.94],
	[17.17093, 46.76862, -12.55398, 10.69899, 62.53064, 101.9578],
	[17.47492, 47.05376, -11.7033, 10.85126, 61.37029, 102.0119],
	[17.77904, 47.37096, -10.90543, 11.0143, 60.23116, 102.0576],
	[18.08448, 47.71934, -10.15031, 11.18393, 59.09407, 102.0914],
	[18.39187, 48.09724, -9.443541, 11.35334, 57.98101, 102.12],
	[18.70784, 48.51667, -8.754339, 11.54121, 56.84661, 102.1467],
	[19.02758, 48.94532, -8.118873, 11.73479, 55.75325, 102.1721],
	[19.47312, 48.90414, -7.425701, 11.89222, 55.0554, 102.4114],
	[19.78968, 48.65649, -6.991959, 11.96451, 54.82426, 102.6488],
	[20.1081, 48.40749, -6.564579, 12.04284, 54.5998, 102.8906],
	[20.10823, 48.40635, -6.559793, 12.04229, 54.59592, 102.9029],
	[20.10823, 48.40657, -6.560174, 12.04207, 54.59495, 102.9021],
	[20.10823, 48.40657, -6.560935, 12.04163, 54.5942, 102.8996],
	[20.1081, 48.40671, -6.561805, 12.04163, 54.59344, 102.8982],
	[20.1081, 48.40694, -6.563165, 12.04108, 54.5929, 102.896],
	[20.1081, 48.40699, -6.564144, 12.04108, 54.59237, 102.894],
	[20.10792, 48.40726, -6.565286, 12.04086, 54.59237, 102.8928],
	[19.53381, 48.84472, -7.341454, 11.93397, 54.8918, 102.4671],
	[18.76377, 48.58513, -8.590904, 11.6414, 56.3979, 102.1587],
	[16.81252, 45.73018, -14.5859, 10.34469, 65.6403, 102.0944],
	[26.77598, 38.6178, -1.81185, 12.24158, 58.45578, 110.2133],
	[27.17685, 39.0563, -1.079682, 12.43011, 57.22629, 110.2901],
	[27.39104, 39.62537, -0.5352606, 12.61699, 56.09017, 110.2216],
	[27.60531, 40.21363, -0.02787711, 12.80584, 54.98098, 110.1071],
	[27.82227, 40.8241, 0.4441543, 13.0081, 53.90766, 109.9965],
	[28.01553, 41.38808, 0.8291109, 13.19311, 52.94269, 109.8984],
	[28.38997, 41.85192, 1.304786, 13.41328, 51.93949, 109.9078],
	[28.75247, 41.77855, 1.591192, 13.48194, 51.67291, 110.1903],
	[29.08443, 41.66946, 1.838221, 13.52721, 51.45372, 110.4808],
	[29.0891, 41.66933, 1.845999, 13.57522, 51.4603, 110.4839],
	[29.08729, 41.66946, 1.843823, 13.55994, 51.4688, 110.4837],
	[29.08674, 41.66946, 1.842572, 13.55764, 51.47871, 110.4828],
	[28.50565, 41.71922, 1.377938, 13.44558, 51.92969, 110.1029],
	[25.78149, 35.95067, 0.7564488, 10.78128, 58.04983, 110.8958],
	[22.22433, 22.81488, 16.54908, 2.090767, 53.02552, 117.1657],
	[22.27831, 22.82305, 16.57083, 2.118891, 52.96606, 117.1833],
	[22.27849, 22.83168, 16.55582, 2.124714, 52.96208, 117.1806],
	[22.27876, 22.83272, 16.55103, 2.125154, 52.96036, 117.1788],
	[22.27849, 22.83272, 16.55044, 2.124714, 52.96036, 117.178],
	[19.12069, 23.80315, 14.41876, 1.932673, 54.15841, 114.1798],
	[19.08982, 23.81205, 14.3957, 1.925971, 54.21064, 114.1435],
	[19.09073, 23.81119, 14.39739, 1.926301, 54.22206, 114.1423],
	[19.09091, 23.81078, 14.39853, 1.926301, 54.22486, 114.1423],
	[19.09114, 23.81046, 14.39918, 1.926301, 54.22615, 114.1429],
	[19.09127, 23.81028, 14.39978, 1.925971, 54.22615, 114.1429],
	[19.09127, 23.8101, 14.40043, 1.925971, 54.22615, 114.1429],
	[19.09127, 23.80987, 14.40092, 1.925971, 54.22615, 114.1429],
	[19.09141, 23.80987, 14.40109, 1.925971, 54.22562, 114.1429],
	[19.0915, 23.80987, 14.40147, 1.925971, 54.22562, 114.1429],
	[19.0915, 23.80969, 14.40185, 1.925532, 54.22562, 114.1435]
]
var abbSim3 = [
	[29.33389, 26.3602, 12.97537, -1.323781, 51.6043, -59.16765],
	[29.33389, 26.3602, 12.97537, -1.323781, 51.6043, -59.16765],
	[29.33393, 26.3602, 12.97537, -1.323781, 51.6043, -59.16765],
	[29.33389, 26.3602, 12.97537, -1.323781, 51.6043, -59.16765],
	[29.33389, 26.3602, 12.97537, -1.323781, 51.6043, -59.16765],
	[29.33389, 26.3602, 12.97537, -1.323781, 51.6043, -59.16765],
	[29.33389, 26.3602, 12.97537, -1.323781, 51.6043, -59.16765],
	[29.33389, 26.3602, 12.97537, -1.323781, 51.6043, -59.16765],
	[29.33389, 26.3602, 12.97537, -1.323781, 51.6043, -59.16765],
	[29.33389, 26.3602, 12.97537, -1.323781, 51.6043, -59.16765],
	[29.33389, 26.3602, 12.97537, -1.323781, 51.6043, -59.16765],
	[29.33389, 26.3602, 12.97537, -1.323781, 51.6043, -59.16765],
	[29.33389, 26.3602, 12.97537, -1.323781, 51.6043, -59.16765],
	[29.33389, 26.3602, 12.97537, -1.323781, 51.6043, -59.16765],
	[29.33389, 26.3602, 12.97537, -1.323781, 51.6043, -59.16765],
	[29.33389, 26.3602, 12.97537, -1.323781, 51.6043, -59.16765],
	[29.33389, 26.3602, 12.97537, -1.323781, 51.6043, -59.16765],
	[29.33393, 26.3602, 12.97537, -1.323781, 51.60419, -59.16765],
	[29.33403, 26.3602, 12.97537, -1.323781, 51.6043, -59.16765],
	[29.31959, 26.3577, 13.08001, -1.325649, 51.57209, -59.1683],
	[27.98198, 25.34705, 23.45192, -1.55801, 42.1442, -60.1496],
	[27.9749, 25.34718, 23.48629, -1.575807, 42.09121, -60.16938],
	[27.97503, 25.348, 23.48026, -1.580092, 42.09681, -60.17367],
	[28.09725, 25.33797, 22.72796, -1.57339, 42.78368, -60.15378],
	[36.75511, 37.76555, -3.562265, -6.775087, 56.2611, -47.59673],
	[41.94865, 50.83646, -23.47428, -11.01427, 63.75453, -40.02595],
	[42.12043, 56.11607, -21.03635, -12.0973, 56.16868, -37.93569],
	[42.11744, 56.38183, -20.9162, -12.1351, 55.76252, -37.85725],
	[42.11117, 56.69867, -20.82108, -12.19025, 55.35074, -37.76024],
	[42.10886, 56.75786, -20.79856, -12.20772, 55.27621, -37.74123],
	[42.1084, 56.75764, -20.7972, -12.20849, 55.27761, -37.74123],
	[42.10813, 56.75745, -20.79748, -12.20772, 55.27794, -37.74123],
	[42.10813, 56.75714, -20.79758, -12.20607, 55.27815, -37.74123],
	[42.10827, 56.75696, -20.79813, -12.20563, 55.27815, -37.74123],
	[42.10827, 56.75655, -20.79829, -12.20486, 55.27847, -37.74178],
	[42.1084, 56.75623, -20.79883, -12.20376, 55.27847, -37.74178],
	[42.10931, 55.93285, -21.00437, -12.08775, 56.10514, -37.91394],
	[41.60044, 49.98607, -22.35481, -11.24696, 63.40351, -40.10626],
	[36.34571, 39.85499, -3.628183, -12.83515, 54.5454, -43.70461],
	[34.7679, 40.64265, 1.405024, -14.10571, 48.61731, -43.56442],
	[34.72182, 40.91771, 1.574116, -14.20415, 48.17883, -43.4282],
	[34.66584, 41.21661, 1.754193, -14.29424, 47.69585, -43.28768],
	[34.65513, 41.28258, 1.819731, -14.36422, 47.58567, -43.27098],
	[34.65522, 41.2804, 1.814727, -14.35532, 47.59859, -43.27175],
	[34.6554, 41.2784, 1.807928, -14.345, 47.60753, -43.27219],
	[34.6554, 41.27763, 1.8051, -14.34269, 47.60947, -43.27274],
	[34.6831, 41.12895, 1.726619, -14.31775, 47.72181, -43.28252],
	[34.92039, 38.02164, -0.1958798, -13.28954, 52.75915, -44.6413],
	[34.92139, 38.02404, -0.1951728, -13.28811, 52.75786, -44.64988],
	[34.28527, 36.27377, -0.3678539, -12.87492, 53.85929, -45.67962],
	[33.99917, 37.92258, 1.150544, -13.39754, 50.32654, -44.94288],
	[33.995, 39.24648, 1.827998, -13.82842, 48.34588, -44.2893],
	[33.99423, 39.61452, 1.984417, -13.93806, 47.82608, -44.10133],
	[33.99409, 39.67934, 2.009381, -13.96333, 47.73345, -44.06946],
	[33.99395, 39.68107, 2.015527, -13.97135, 47.73215, -44.06782],
	[33.99395, 39.68153, 2.017104, -13.97355, 47.73194, -44.06749],
	[33.99468, 39.53284, 1.990726, -13.96948, 47.80755, -44.07529],
	[33.589, 34.78907, 0.789137, -11.92493, 53.69999, -46.89592],
	[25.52985, 25.62061, 14.58204, -1.192604, 52.78274, -40.765],
	[22.24476, 25.75118, 15.20755, 2.292588, 55.92343, 6.764384],
	[23.87128, 33.24158, 4.610041, 7.751365, 59.23528, 54.25927],
	[24.12451, 53.06083, -26.83049, 10.54123, 67.34415, 104.3634],
	[23.70339, 60.70609, -34.87292, 10.72855, 67.06001, 113.098],
	[23.78902, 63.08884, -33.06355, 11.11186, 62.82963, 112.2365],
	[23.84563, 63.26272, -32.84904, 11.15218, 62.41796, 112.1446],
	[23.84681, 63.26095, -32.84094, 11.15043, 62.42981, 112.1421],
	[23.84713, 63.25927, -32.84214, 11.15043, 62.42873, 112.1401],
	[23.84713, 63.25873, -32.84268, 11.15043, 62.42733, 112.1382],
	[23.84735, 63.25859, -32.84295, 11.15043, 62.42701, 112.1373],
	[23.84735, 63.25859, -32.84333, 11.15043, 62.42648, 112.1369],
	[23.84735, 63.25841, -32.84388, 11.15043, 62.42604, 112.1367],
	[23.84241, 63.2132, -32.85943, 11.15043, 62.43079, 112.1367],
	[23.72809, 59.56319, -35.86147, 10.58089, 69.006, 113.3191],
	[28.74076, 41.33469, -10.20644, 11.45068, 60.97251, 116.3142],
	[32.19882, 36.82417, 3.254208, 12.93296, 51.56445, 117.3362],
	[32.19415, 37.77349, 3.696109, 13.14521, 50.3092, 116.9273],
	[32.18788, 38.08229, 3.815218, 13.22783, 49.91165, 116.7796],
	[32.18366, 38.47825, 3.970386, 13.34406, 49.40369, 116.6135],
	[32.18248, 38.53005, 3.991869, 13.35769, 49.27972, 116.5717],
	[32.18207, 38.53059, 3.993175, 13.35659, 49.27584, 116.5704],
	[32.18225, 38.53005, 3.992903, 13.35637, 49.28198, 116.5709],
	[32.18225, 38.52969, 3.992467, 13.35549, 49.29318, 116.5717],
	[32.18366, 38.37034, 3.946999, 13.35044, 49.40983, 116.5863],
	[32.19065, 33.40266, 0.645227, 11.9755, 57.59034, 118.8891],
	[32.19297, 33.40506, 0.6426163, 11.97253, 57.58721, 118.8992],
	[26.43563, 38.69058, -6.380693, -4.72383, 57.21852, 120.5119],
	[24.13754, 44.2429, -7.511415, -12.58037, 51.60602, 122.7789],
	[24.13645, 44.50775, -7.335525, -12.62652, 51.19349, 122.8831],
	[24.13341, 44.85572, -7.181879, -12.72111, 50.70417, 123.0168],
	[24.13245, 44.91964, -7.126621, -12.73517, 50.59193, 123.0496],
	[24.13291, 44.92455, -7.112318, -12.73429, 50.57632, 123.055],
	[24.13291, 44.92541, -7.110359, -12.73418, 50.57363, 123.0552],
	[24.13323, 44.92096, -7.110142, -12.7333, 50.57341, 123.0557],
	[24.20677, 41.52001, -9.0309, -11.85791, 55.81669, 120.5642],
	[25.28625, 36.47352, -1.726569, -9.635597, 50.89266, 75.9498],
	[26.5425, 31.69324, 5.362713, -4.492568, 48.42817, 19.98258],
	[27.84669, 28.63396, 9.749847, -1.54153, 49.5408, -24.07127],
	[31.1361, 25.40911, 14.82542, -3.041164, 50.28551, -54.89177],
	[40.96759, 23.17071, 23.89219, -14.54605, 43.86841, -37.24212],
	[41.1219, 28.56314, 25.52741, -16.91591, 36.90319, -34.01643],
	[41.11242, 28.98388, 25.57946, -17.09872, 36.44715, -33.77407],
	[41.1066, 29.38693, 25.63189, -17.28494, 36.01125, -33.53918],
	[41.10574, 29.38693, 25.63243, -17.28549, 35.99133, -33.53303],
	[41.10529, 29.38656, 25.63216, -17.28472, 35.99175, -33.53204],
	[41.10529, 29.38625, 25.63216, -17.28417, 35.99466, -33.53303],
	[41.10529, 29.38615, 25.63189, -17.28384, 35.99908, -33.53368],
	[41.10529, 29.3857, 25.63189, -17.28274, 36.00479, -33.535],
	[41.10551, 29.38561, 25.63173, -17.28241, 36.00985, -33.53599],
	[41.10606, 29.36305, 25.63009, -17.28054, 36.01545, -33.53764],
	[40.88388, 22.7698, 23.53579, -14.48123, 44.48774, -37.35177],
	[30.68939, 32.9351, -0.8986241, -11.83144, 56.50829, -51.73715],
	[29.21681, 38.60128, -2.537817, -12.38339, 52.38723, -52.13563],
	[29.21631, 40.2697, -1.419061, -12.9037, 49.5966, -51.30001],
	[29.21744, 40.54091, -1.261554, -12.9973, 49.16124, -51.15488],
	[29.21853, 40.82251, -1.119928, -13.08344, 48.74775, -51.01898],
	[29.21958, 41.1077, -0.9879832, -13.1666, 48.3447, -50.89549],
	[29.22035, 41.16482, -0.9610612, -13.18803, 48.24894, -50.86781],
	[29.22067, 41.16482, -0.9604086, -13.18847, 48.24776, -50.86615],
	[29.22085, 41.16482, -0.9604086, -13.18803, 48.24862, -50.86615],
	[29.22085, 41.1645, -0.9604086, -13.18759, 48.24981, -50.86615],
	[29.22385, 40.95235, -1.026707, -13.16858, 48.40361, -50.88187],
	[29.22993, 35.37924, -5.799505, -11.51052, 58.6573, -53.65361],
	[29.23138, 35.35432, -5.839535, -11.49031, 58.71192, -53.68909],
	[30.70868, 36.71413, -7.315347, -11.15764, 58.65709, -45.26466],
	[36.38166, 44.49535, -17.23312, -11.18884, 57.76622, 8.708633],
	[38.58002, 43.87667, -14.62049, -15.47186, 53.90496, 61.28557],
	[41.42048, 38.55189, -2.986407, -22.50608, 49.21326, 101.7568],
	[45.18362, 40.81321, 1.465286, -36.82599, 45.56504, 116.7919],
	[45.17435, 40.81616, 1.463926, -36.82006, 45.57668, 116.7594],
	[45.17313, 40.81647, 1.461805, -36.81479, 45.59295, 116.7449],
	[45.17272, 40.81647, 1.461098, -36.81324, 45.59671, 116.7433],
	[45.17272, 40.81647, 1.460445, -36.81303, 45.59908, 116.7424],
	[45.17272, 40.81647, 1.459792, -36.81303, 45.60048, 116.7419],
	[45.17272, 40.81647, 1.459358, -36.81303, 45.6007, 116.7419],
	[45.1729, 40.81616, 1.458977, -36.81303, 45.60124, 116.7414],
	[42.23438, 38.77597, -1.765783, -25.43196, 48.20478, 105.0435],
	[37.72908, 33.61843, 2.927501, -13.85918, 44.55613, 57.67832],
	[34.17495, 29.98191, 8.030976, -4.948061, 44.19639, 8.528239],
	[30.4244, 27.15216, 11.88326, -0.7663348, 49.50559, -43.45248],
	[27.97467, 25.33583, 23.46943, -1.545705, 42.1735, -60.23794],
	[27.97141, 25.34305, 23.4944, -1.574379, 42.10241, -60.21123],
	[27.97395, 25.34813, 23.47824, -1.579103, 42.10295, -60.17729],
	[27.97513, 25.34882, 23.47422, -1.580092, 42.10317, -60.17334],
	[27.97563, 25.34882, 23.47286, -1.580312, 42.10371, -60.17246],
	[29.33307, 26.35897, 12.96226, -1.346962, 51.57705, -59.16655],
	[29.33516, 26.3616, 12.95867, -1.326528, 51.61496, -59.16457],
	[29.33489, 26.36069, 12.96694, -1.322133, 51.61195, -59.16457],
	[29.33471, 26.36037, 12.97134, -1.321584, 51.60968, -59.16457],
	[29.33466, 26.3601, 12.97346, -1.321584, 51.60882, -59.16468],
	[29.3343, 26.35988, 12.97471, -1.321584, 51.60774, -59.16489],
	[29.3343, 26.35969, 12.97499, -1.321584, 51.60677, -59.16489],
	[29.33421, 26.35969, 12.97526, -1.321584, 51.60602, -59.16489],
	[29.33421, 26.35947, 12.97526, -1.322133, 51.60516, -59.16489]
]