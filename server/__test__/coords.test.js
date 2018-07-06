const axios = require('axios')

describe('coords', () => {
    it('coords id and type', async() => {
        const res = await axios.post('http://localhost:4000/graphql', {
            query: 
            `
            {
                coords(id: 1){
                    id
                    type
                }
            }
            `
        })
        expect(res.data).toMatchObject({
            "data": {
                "coords": {
                  "id": 1,
                  "type": 2
                }
            }
        })
    }, 60000)

    it('coords time and distance', async() => {
        const res = await axios.post('http://localhost:4000/graphql', {
            query: 
            `
            {
                coords(id: 1){
                    time
                    distance
                }
            }
            `
        })
        expect(res.data).toMatchObject({
            "data": {
                "coords": {
                  "time": 1481.8549742517912,
                  "distance": 19766.230515468364
                }
            }
        })
    }, 60000)

    it('coords route', async() => {
        const res = await axios.post('http://localhost:4000/graphql', {
            query:
            `
            {
                coords(id: 1){
                  route {
                    nameth
                    seq
                    geom
                  }
                }
            }
            `
        })
        expect(res.data).toMatchObject(
            {
                "data": {
                  "coords": {
                    "route": [
                      {
                        "nameth": "จุดเริ่ม",
                        "seq": 1,
                        "geom": "{\"type\":\"LineString\",\"coordinates\":[[100.596212131283,13.802003614469],[100.596463932955,13.8019754400097]]}"
                      },
                      {
                        "nameth": "ถนนโชคชัย 4",
                        "seq": 2,
                        "geom": "{\"type\":\"MultiLineString\",\"coordinates\":[[[100.596463932955,13.8019754400097],[100.596379999581,13.8012680001211],[100.596300999938,13.8009609997924]],[[100.596300999938,13.8009609997924],[100.596167000044,13.8004029997004]],[[100.596167000044,13.8004029997004],[100.596040000721,13.7998750004761]],[[100.596040000721,13.7998750004761],[100.595910000126,13.7993150008916]],[[100.595910000126,13.7993150008916],[100.59578000043,13.7987400000986]],[[100.59578000043,13.7987400000986],[100.59554000023,13.7972050004619]],[[100.59554000023,13.7972050004619],[100.595525000162,13.7971310003982]],[[100.595525000162,13.7971310003982],[100.595472000458,13.7967820009365]],[[100.595472000458,13.7967820009365],[100.595412000184,13.7964020002841]],[[100.595412000184,13.7964020002841],[100.595377000024,13.7961619999205]],[[100.595377000024,13.7961619999205],[100.595321999772,13.7959530000426],[100.595253000175,13.7957510001204]],[[100.595253000175,13.7957510001204],[100.595071999527,13.7952610000749],[100.594931999785,13.7950080005994]],[[100.594931999785,13.7950080005994],[100.59364999967,13.7949039996182]],[[100.59364999967,13.7949039996182],[100.593591000118,13.7948159993557]]]}"
                      },
                      {
                        "nameth": "ถนนลาดพร้าว",
                        "seq": 3,
                        "geom": "{\"type\":\"MultiLineString\",\"coordinates\":[[[100.593591000118,13.7948159993557],[100.59293900019,13.7951800001071]],[[100.59293900019,13.7951800001071],[100.592407999738,13.7954769998515]],[[100.592407999738,13.7954769998515],[100.591564000189,13.7959520002723]],[[100.591564000189,13.7959520002723],[100.590773000343,13.7963829994501]],[[100.590773000343,13.7963829994501],[100.590153999129,13.7967330001479]],[[100.590153999129,13.7967330001479],[100.589827999614,13.796919000345],[100.589412209666,13.7971511287591]],[[100.589412209666,13.7971511287591],[100.588928554774,13.7974211447196]],[[100.588928554774,13.7974211447196],[100.588808216832,13.7974883272126],[100.588360999551,13.7977380001806],[100.587368000039,13.7982930003874]],[[100.587368000039,13.7982930003874],[100.587303999567,13.798330999998],[100.586967051662,13.7985183715816]],[[100.586967051662,13.7985183715816],[100.586322459992,13.7988768187446]],[[100.586322459992,13.7988768187446],[100.586191179316,13.7989498217704],[100.584135000163,13.8001100000025]],[[100.584135000163,13.8001100000025],[100.58327900002,13.8006100004531]],[[100.58327900002,13.8006100004531],[100.583206001123,13.800650000059]],[[100.583206001123,13.800650000059],[100.581456999232,13.8016199990886]],[[100.581456999232,13.8016199990886],[100.580959000188,13.8019040000593]],[[100.580959000188,13.8019040000593],[100.579031999817,13.8029620006927]],[[100.579031999817,13.8029620006927],[100.578307000094,13.8033639997377]],[[100.578307000094,13.8033639997377],[100.577874000449,13.803602999933]],[[100.577874000449,13.803602999933],[100.577112999842,13.8040379996198]],[[100.577112999842,13.8040379996198],[100.576300000256,13.8045030009747]],[[100.576300000256,13.8045030009747],[100.575783999872,13.8047909999812]],[[100.575783999872,13.8047909999812],[100.575337999808,13.8050510009234]],[[100.575337999808,13.8050510009234],[100.575061999623,13.8052050004925]],[[100.575061999623,13.8052050004925],[100.574846981572,13.805320080277]],[[100.574846981572,13.805320080277],[100.573105000912,13.80627800036]],[[100.573105000912,13.80627800036],[100.572735999045,13.8064910003552]],[[100.572735999045,13.8064910003552],[100.572029000662,13.8068810001248]],[[100.572029000662,13.8068810001248],[100.571285999599,13.8073020002108]],[[100.571285999599,13.8073020002108],[100.570602999708,13.8076889994638]],[[100.570602999708,13.8076889994638],[100.570396998946,13.8078029997907]],[[100.570396998946,13.8078029997907],[100.570197386724,13.8079183855054]],[[100.570197386724,13.8079183855054],[100.570134354512,13.8079548212228],[100.569986999765,13.8080399994885]],[[100.569986999765,13.8080399994885],[100.569467000081,13.808329999667]],[[100.569467000081,13.808329999667],[100.569036000086,13.8085769994804]],[[100.569036000086,13.8085769994804],[100.567209999998,13.8096009997012]],[[100.567209999998,13.8096009997012],[100.56665000103,13.8098959999797]],[[100.56665000103,13.8098959999797],[100.56615073077,13.8101757662692]],[[100.56615073077,13.8101757662692],[100.565872997779,13.8103313939161]],[[100.565872997779,13.8103313939161],[100.564703999494,13.810971000349]],[[100.564703999494,13.810971000349],[100.56395817862,13.81139390435]],[[100.56395817862,13.81139390435],[100.563789177667,13.8114934516518]],[[100.563789177667,13.8114934516518],[100.563108082205,13.811872631266]],[[100.563108082205,13.811872631266],[100.562779082317,13.8120586298556]],[[100.562779082317,13.8120586298556],[100.562145000186,13.8124311656946]],[[100.562145000186,13.8124311656946],[100.561457932724,13.8128268501402]],[[100.561457932724,13.8128268501402],[100.560592604475,13.8132997791914]]]}"
                      },
                      {
                        "nameth": "ถนนไม่มีชื่อ",
                        "seq": 4,
                        "geom": "{\"type\":\"LineString\",\"coordinates\":[[100.560592604475,13.8132997791914],[100.560451274328,13.8133848082857],[100.560363972456,13.8133924935542],[100.560305971831,13.8133894935953],[100.560234000607,13.8133510000802],[100.560085999571,13.8132719996816]]}"
                      },
                      {
                        "nameth": "ถนนพหลโยธิน",
                        "seq": 5,
                        "geom": "{\"type\":\"MultiLineString\",\"coordinates\":[[[100.560085999571,13.8132719996816],[100.559993999509,13.8131119994105]],[[100.559993999509,13.8131119994105],[100.559758000406,13.812774999309],[100.55969099956,13.8126609996691],[100.55963900058,13.8125409991615],[100.559627999811,13.8124070001791],[100.559635999309,13.8123140001694]],[[100.559635999309,13.8123140001694],[100.559698000131,13.8117800000433]],[[100.559698000131,13.8117800000433],[100.559720999698,13.8115719999081],[100.559694999758,13.8115119993816],[100.55960600007,13.811449999432],[100.559356000723,13.811431999528],[100.559084998765,13.8113700004295],[100.558970000035,13.8113090001466],[100.558834999418,13.81115000085]],[[100.558834999418,13.81115000085],[100.558754785253,13.8110148068295]],[[100.558754785253,13.8110148068295],[100.558255000358,13.8101069998671]],[[100.558255000358,13.8101069998671],[100.557938000166,13.809560999886]],[[100.557938000166,13.809560999886],[100.557776000682,13.8092140001329]],[[100.557776000682,13.8092140001329],[100.557527999188,13.8088110001182],[100.557103999764,13.8080249993491]],[[100.557103999764,13.8080249993491],[100.556990999786,13.8078150007861]],[[100.556990999786,13.8078150007861],[100.556840999998,13.8075590000636]],[[100.556840999998,13.8075590000636],[100.556281999957,13.806603000074]],[[100.556281999957,13.806603000074],[100.556061000024,13.8062249991719]],[[100.556061000024,13.8062249991719],[100.555687000828,13.8056100000917]],[[100.555687000828,13.8056100000917],[100.554399999792,13.8034139997441]],[[100.554399999792,13.8034139997441],[100.552635999628,13.8004050009476]],[[100.552635999628,13.8004050009476],[100.552305999915,13.7998539995454]],[[100.552305999915,13.7998539995454],[100.552142999709,13.7995710001955],[100.551805000498,13.799013000268]],[[100.551805000498,13.799013000268],[100.551701999668,13.7988179995565]],[[100.551701999668,13.7988179995565],[100.551384999475,13.7981520001251]],[[100.551384999475,13.7981520001251],[100.551255000677,13.7978419998986]],[[100.551255000677,13.7978419998986],[100.550489000048,13.7958500001257]],[[100.550489000048,13.7958500001257],[100.550296999529,13.7952750003896]],[[100.550296999529,13.7952750003896],[100.550026000266,13.7944679996978]],[[100.550026000266,13.7944679996978],[100.549743000409,13.7937310000052]],[[100.549743000409,13.7937310000052],[100.549689999807,13.793577999621]],[[100.549689999807,13.793577999621],[100.549586999875,13.7932640002974]],[[100.549586999875,13.7932640002974],[100.549497999288,13.7929870003766]],[[100.549497999288,13.7929870003766],[100.549427000041,13.7927540002234]],[[100.549427000041,13.7927540002234],[100.549247000116,13.7922760000421]],[[100.549247000116,13.7922760000421],[100.549111999498,13.7919110002082]],[[100.549111999498,13.7919110002082],[100.54871099964,13.7908199990682]],[[100.54871099964,13.7908199990682],[100.548651999191,13.7906599990976]],[[100.548651999191,13.7906599990976],[100.54831999893,13.7897779994503]],[[100.54831999893,13.7897779994503],[100.548289999691,13.7896959995275]],[[100.548289999691,13.7896959995275],[100.548163000368,13.7893690010914]],[[100.548163000368,13.7893690010914],[100.547991999765,13.7889030003088]],[[100.547991999765,13.7889030003088],[100.547886000358,13.7885830002474]],[[100.547886000358,13.7885830002474],[100.547706000433,13.7880450006661]],[[100.547706000433,13.7880450006661],[100.547639999413,13.7878690001707]],[[100.547639999413,13.7878690001707],[100.547547999351,13.7876389995613]],[[100.547547999351,13.7876389995613],[100.547480000477,13.7874610008914]],[[100.547480000477,13.7874610008914],[100.547324999768,13.7870320005595]],[[100.547324999768,13.7870320005595],[100.546647999726,13.7851430004615]],[[100.546647999726,13.7851430004615],[100.546408999351,13.7844750007587]],[[100.546408999351,13.7844750007587],[100.546252999716,13.7840460001758]],[[100.546252999716,13.7840460001758],[100.546013000414,13.7834210002386]],[[100.546013000414,13.7834210002386],[100.54575900087,13.7826900004054]],[[100.54575900087,13.7826900004054],[100.545603000336,13.782277999742]],[[100.545603000336,13.782277999742],[100.545308999709,13.7814589997591],[100.545049999243,13.780714999414]],[[100.545049999243,13.780714999414],[100.544387000343,13.7788900001537]],[[100.544387000343,13.7788900001537],[100.544270999992,13.7785669999257]],[[100.544270999992,13.7785669999257],[100.543475999949,13.7763450002123]],[[100.543475999949,13.7763450002123],[100.543224000053,13.7756380001159]],[[100.543224000053,13.7756380001159],[100.543195999566,13.7755539998759]],[[100.543195999566,13.7755539998759],[100.541806001293,13.7716450011209]],[[100.541806001293,13.7716450011209],[100.541261999523,13.7702330006542],[100.540201000239,13.7682550002909]],[[100.540201000239,13.7682550002909],[100.539904999963,13.7677400002563],[100.539533000417,13.7670449990381]],[[100.539533000417,13.7670449990381],[100.539461000553,13.7668999997408]]]}"
                      },
                      {
                        "nameth": "ทางพิเศษศรีรัช (ระบบทางด่วนขั้นที่ 2)",
                        "seq": 6,
                        "geom": "{\"type\":\"MultiLineString\",\"coordinates\":[[[100.539461,13.7669],[100.539441,13.766757],[100.539446752246,13.7666907338071],[100.539467,13.76664],[100.539518,13.766524],[100.539666,13.766323],[100.540086475563,13.7657786600089],[100.540254953247,13.7655869201072],[100.540440506211,13.7654033169923],[100.540689844454,13.7651738155546],[100.541046,13.764889],[100.541846,13.764403],[100.542696,13.763998],[100.542938442985,13.7638884682947],[100.543278772744,13.7637258867435],[100.543464844454,13.7636287577549],[100.543664,13.76349],[100.543798,13.763342]],[[100.543798,13.763342],[100.543981,13.763197],[100.544351,13.762902],[100.544906,13.762341],[100.545502546875,13.7616546384125],[100.546044262218,13.7610347866547]],[[100.546044262218,13.7610347866547],[100.546416,13.76061]],[[100.546416,13.76061],[100.546757,13.7603],[100.54706,13.759983],[100.548022,13.758916],[100.548220240654,13.7587026598381],[100.548446408837,13.7585066111359],[100.54855869099,13.7584304113317],[100.548661737743,13.7583593446055],[100.548819268986,13.7582610356342],[100.549024178047,13.7581473288723],[100.549173418172,13.7580727088098],[100.549400831696,13.7579767687294],[100.54977866979,13.7578524019586],[100.549998976641,13.7577896263504],[100.550135187867,13.7577410640875],[100.550254816856,13.7576925018246],[100.550382736963,13.7576178817621],[100.550515757755,13.7575200199732],[100.550587048873,13.7574391266458],[100.550665184445,13.7573283888641]],[[100.550665184445,13.7573283888641],[100.550735,13.757191],[100.550778951127,13.7570552133452],[100.550788795581,13.7569094755635]],[[100.550788795581,13.7569094755635],[100.550787645843,13.7567905778818],[100.550754193372,13.7566370199732],[100.550698066726,13.7565065533363],[100.550636208286,13.7563955340715],[100.550559660009,13.7563080399464],[100.550447611136,13.7562140399464]],[[100.550447611136,13.7562140399464],[100.550342164472,13.7561443799375],[100.550235980027,13.756098904374],[100.550121688909,13.7560705643829],[100.550002226798,13.7560527133054],[100.549871524436,13.7560455932827],[100.549625864428,13.7560700688462],[100.549219737782,13.7561627288551],[100.548785884401,13.7562256799821]],[[100.548785884401,13.7562256799821],[100.548284280071,13.7563444377371],[100.54775145347,13.7564826999553]],[[100.54775145347,13.7564826999553],[100.546731339991,13.7566635733095],[100.546517873354,13.7566802821915],[100.546359880761,13.7566626898206],[100.546225962174,13.756632146619],[100.546034757755,13.756547855501],[100.545925951127,13.7564711266458],[100.545818301389,13.7563681719028],[100.545732553336,13.7562523599643],[100.545673974129,13.7561278494028],[100.545635417764,13.7560076043293],[100.545611766682,13.755870195492],[100.545625135572,13.7556717288552],[100.54565,13.755531],[100.545712243643,13.7553500571414],[100.545795980027,13.7551639422004],[100.545932660009,13.7548796889087],[100.546080446664,13.754613144499],[100.546206950906,13.754426612053],[100.546348291118,13.7542296600089],[100.546529448599,13.7540126780646],[100.546806184445,13.7537536600089],[100.547026519304,13.7535678944469],[100.547118824481,13.7534877377817],[100.547234008927,13.753354048873]],[[100.547234008927,13.753354048873],[100.547427737782,13.7532180288998],[100.547630320018,13.7530963200179],[100.5480980578,13.7527664266905],[100.548511,13.752374],[100.548670621084,13.7522049661165],[100.548877737782,13.7519371066726],[100.549004,13.751738]],[[100.549004,13.751738],[100.549231,13.751355]],[[100.549231,13.751355],[100.549337,13.751148],[100.549471,13.750758],[100.549518,13.750632]],[[100.549518,13.750632],[100.549599,13.750285],[100.549664,13.749931],[100.549695,13.749747],[100.549753,13.74929],[100.54985,13.748305],[100.550016,13.746926]],[[100.550016,13.746926],[100.550149951127,13.7460574177639],[100.550223681848,13.7453572896464],[100.550251,13.7448625155099],[100.550291308497,13.7443997757108],[100.550381,13.743691]],[[100.550381,13.743691],[100.550542909054,13.7421978993683],[100.550591844532,13.7418305770843],[100.550688441677,13.7412830420895],[100.550848560754,13.740277271755],[100.550903895799,13.7398891668031]],[[100.550903895799,13.7398891668031],[100.550941983602,13.7395434436323],[100.55110681021,13.7379008811109],[100.551356402219,13.7357227621589]],[[100.551356402219,13.7357227621589],[100.551412288314,13.7351887981229],[100.551857963754,13.7313456975311],[100.552214414849,13.7280034364069],[100.552290331219,13.7273387447253],[100.552401109722,13.7260673174685]],[[100.552401109722,13.7260673174685],[100.552465463064,13.7258281144291],[100.552498761281,13.7256385540491],[100.552533774081,13.7253831579668],[100.552581277945,13.7249990356876],[100.552644106673,13.7244369222272],[100.552700980027,13.7238905843561],[100.552715311091,13.7237116447223],[100.552754656685,13.7232665841696]],[[100.552754656685,13.7232665841696],[100.5527469221,13.7230564916645],[100.552733,13.722955],[100.55272,13.722928],[100.552673,13.722888],[100.552573,13.722853],[100.552429,13.722828]]]}"
                      },
                      {
                        "nameth": "ถนนพระรามที่ 4",
                        "seq": 7,
                        "geom": "{\"type\":\"MultiLineString\",\"coordinates\":[[[100.552429000065,13.722828000168],[100.552428999939,13.7228280002144],[100.552394763518,13.7228403213389]],[[100.552394763518,13.7228403213389],[100.552090000005,13.7229500006831]],[[100.552090000005,13.7229500006831],[100.550327000565,13.7237139994577]],[[100.550327000565,13.7237139994577],[100.549100999628,13.7242150001088]],[[100.549100999628,13.7242150001088],[100.548474000712,13.724473998932]],[[100.548474000712,13.724473998932],[100.54794300026,13.7246930005879]],[[100.54794300026,13.7246930005879],[100.546799999163,13.725170000893]],[[100.546799999163,13.725170000893],[100.546279000553,13.7253719998041],[100.545689999476,13.7256259996137],[100.545022000553,13.7259070001579]],[[100.545022000553,13.7259070001579],[100.544928405981,13.7259510372526]],[[100.544928405981,13.7259510372526],[100.544479531309,13.7261415067768]],[[100.544479531309,13.7261415067768],[100.544250937917,13.7262424936186]],[[100.544250937917,13.7262424936186],[100.543870000134,13.7263970006186]],[[100.543870000134,13.7263970006186],[100.543593000124,13.7265150007083]],[[100.543593000124,13.7265150007083],[100.542451999576,13.727010999416]],[[100.542451999576,13.727010999416],[100.541880999839,13.7272590005582]],[[100.541880999839,13.7272590005582],[100.540464830947,13.7278523012402]],[[100.540464830947,13.7278523012402],[100.539512893426,13.7282053435805],[100.537914999843,13.7288520000698]],[[100.537914999843,13.7288520000698],[100.536853999661,13.7293050001933]]]}"
                      },
                      {
                        "nameth": "ถนนไม่มีชื่อ",
                        "seq": 8,
                        "geom": "{\"type\":\"LineString\",\"coordinates\":[[100.536853999661,13.7293050001933],[100.536720999592,13.7293430005414],[100.536657000916,13.7293560003836],[100.536585999873,13.7293530002187],[100.536510000603,13.7293370002113],[100.536428999514,13.7293160007999]]}"
                      },
                      {
                        "nameth": "ถนนสีลม",
                        "seq": 9,
                        "geom": "{\"type\":\"MultiLineString\",\"coordinates\":[[[100.536428999514,13.7293160007999],[100.536072000037,13.7291080005862],[100.535675000377,13.728964999514]],[[100.535675000377,13.728964999514],[100.534714020095,13.7286145636944]]]}"
                      },
                      {
                        "nameth": "จุดหมาย",
                        "seq": 10,
                        "geom": "{\"type\":\"LineString\",\"coordinates\":[[100.534788043111,13.7284230074659],[100.534714020095,13.7286145636944]]}"
                      }
                    ]
                  }
                }
            }
        )
    }, 60000)
})