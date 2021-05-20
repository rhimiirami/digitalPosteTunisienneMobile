import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import WebView from 'react-native-webview';
const html = `
<html xmlns="http://www.w3.org/1999/xhtml"><head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>..:: La Poste Tunisienne ::.. </title>

<script type="text/JavaScript">
<!--
function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}
//-->
</script>
</head>

<body onload="MM_preloadImages('images/gif/boutons/valider_off.gif','images/gif/boutons/annuler_off.gif')">
<table width="900" border="0" cellspacing="0" cellpadding="0">
      <tbody><tr>
        <td width="700" class="alignement" valign="top"><table width="700" height="39" border="0" cellpadding="0" cellspacing="0" background="image/gif/fond_newsletter.gif" class="tableau_cadre_ss_fond">
            <tbody><tr>
              <td align="center"><table width="680" border="0" cellspacing="0" cellpadding="0">
                <tbody><tr>
                  <td class="titre_principal">
				  	<div class="alignement">Acheter et vendre des devises</div>
				  </td>
                </tr>
              </tbody></table></td>
            </tr>
          </tbody></table>
          <table width="700" border="0" cellspacing="0" cellpadding="0">
            <tbody><tr>
              <td height="20"><img src="image/gif/px.gif" width="1" height="1"></td>
            </tr>
            <tr>
              <td valign="top" class="text"></td>
            </tr>
            <tr>
              <td valign="top" class="text"><table cellspacing="1" cellpadding="0" border="0">
                <tbody>
                  <tr>
                    <td height="30" colspan="5" class="tableau"><strong>Cours de Change des Billets de Banque pour le 19-05-2021</strong> </td>
                    </tr>
                  <tr>
                    <td width="118" height="16" class="cel_titre"><strong>Monnaie</strong></td>
                    <td width="37" class="cel_titre"><strong>Sigle</strong></td>
                    <td width="70" align="middle" class="cel_titre"><strong>Unité </strong></td>
                    <td width="107" align="middle" class="cel_titre"><strong>Achat </strong></td>
                    <td width="101" align="middle" class="cel_titre"><strong>Vente </strong></td>
                  </tr>
                                    <tr>
                    <td height="16" class="cel_contenu">Riyal Saoudien</td>
                    <td class="cel_contenu">SAR</td>
                    <td class="cel_contenu" align="middle">10</td>
                    <td class="cel_contenu" align="middle">7.175</td>
                    <td class="cel_contenu" align="middle">7.321</td>
                  </tr>
                                    <tr>
                    <td height="16" class="cel_contenu">Dollar Canadien</td>
                    <td class="cel_contenu">CAD</td>
                    <td class="cel_contenu" align="middle">1</td>
                    <td class="cel_contenu" align="middle">2.226</td>
                    <td class="cel_contenu" align="middle">2.264</td>
                  </tr>
                                    <tr>
                    <td height="16" class="cel_contenu">Couronne Danoise</td>
                    <td class="cel_contenu">DKK</td>
                    <td class="cel_contenu" align="middle">100</td>
                    <td class="cel_contenu" align="middle">43.931</td>
                    <td class="cel_contenu" align="middle">44.962</td>
                  </tr>
                                    <tr>
                    <td height="16" class="cel_contenu">Dirham EUA</td>
                    <td class="cel_contenu">AED</td>
                    <td class="cel_contenu" align="middle">10</td>
                    <td class="cel_contenu" align="middle">7.235</td>
                    <td class="cel_contenu" align="middle">7.559</td>
                  </tr>
                                    <tr>
                    <td height="16" class="cel_contenu">Dollar USA</td>
                    <td class="cel_contenu">USD</td>
                    <td class="cel_contenu" align="middle">1</td>
                    <td class="cel_contenu" align="middle">2.699</td>
                    <td class="cel_contenu" align="middle">2.736</td>
                  </tr>
                                    <tr>
                    <td height="16" class="cel_contenu">Livre Sterling</td>
                    <td class="cel_contenu">GBP</td>
                    <td class="cel_contenu" align="middle">1</td>
                    <td class="cel_contenu" align="middle">3.769</td>
                    <td class="cel_contenu" align="middle">4.057</td>
                  </tr>
                                    <tr>
                    <td height="16" class="cel_contenu">Yen Japonais</td>
                    <td class="cel_contenu">JPY</td>
                    <td class="cel_contenu" align="middle">1000</td>
                    <td class="cel_contenu" align="middle">24.095</td>
                    <td class="cel_contenu" align="middle">25.078</td>
                  </tr>
                                    <tr>
                    <td height="16" class="cel_contenu">Dinar Koweitien</td>
                    <td class="cel_contenu">KWD</td>
                    <td class="cel_contenu" align="middle">1</td>
                    <td class="cel_contenu" align="middle">8.886</td>
                    <td class="cel_contenu" align="middle">9.095</td>
                  </tr>
                                    <tr>
                    <td height="16" class="cel_contenu">Couronne Norvégeinne</td>
                    <td class="cel_contenu">NOK</td>
                    <td class="cel_contenu" align="middle">100</td>
                    <td class="cel_contenu" align="middle">32.261</td>
                    <td class="cel_contenu" align="middle">33.213</td>
                  </tr>
                                    <tr>
                    <td height="16" class="cel_contenu">Riyal Qatari</td>
                    <td class="cel_contenu">QAR</td>
                    <td class="cel_contenu" align="middle">10</td>
                    <td class="cel_contenu" align="middle">7.412</td>
                    <td class="cel_contenu" align="middle">7.662</td>
                  </tr>
                                    <tr>
                    <td height="16" class="cel_contenu">Couronne Suédoise</td>
                    <td class="cel_contenu">SEK</td>
                    <td class="cel_contenu" align="middle">10</td>
                    <td class="cel_contenu" align="middle">3.213</td>
                    <td class="cel_contenu" align="middle">3.339</td>
                  </tr>
                                    <tr>
                    <td height="16" class="cel_contenu">Franc Suisse</td>
                    <td class="cel_contenu">CHF</td>
                    <td class="cel_contenu" align="middle">10</td>
                    <td class="cel_contenu" align="middle">29.831</td>
                    <td class="cel_contenu" align="middle">31.050</td>
                  </tr>
                                    <tr>
                    <td height="16" class="cel_contenu">EURO</td>
                    <td class="cel_contenu">EUR</td>
                    <td class="cel_contenu" align="middle">1</td>
                    <td class="cel_contenu" align="middle">3.292</td>
                    <td class="cel_contenu" align="middle">3.346</td>
                  </tr>
                                    <tr>
                    <td height="16" class="cel_contenu">Dinar Bahreîni</td>
                    <td class="cel_contenu">BHD</td>
                    <td class="cel_contenu" align="middle">1</td>
                    <td class="cel_contenu" align="middle">7.032</td>
                    <td class="cel_contenu" align="middle">7.361</td>
                  </tr>
                                    <tr>
                    <td height="16" class="cel_contenu">Dinar Libyen</td>
                    <td class="cel_contenu">LYD</td>
                    <td class="cel_contenu" align="middle">1</td>
                    <td class="cel_contenu" align="middle">0.578</td>
                    <td class="cel_contenu" align="middle">0.613</td>
                  </tr>
                                    <tr>
                    <td height="16" class="cel_contenu">Yuan Chine</td>
                    <td class="cel_contenu">CNY</td>
                    <td class="cel_contenu" align="middle">1</td>
                    <td class="cel_contenu" align="middle"></td>
                    <td class="cel_contenu" align="middle"></td>
                  </tr>
                                  </tbody>
              </table></td>
            </tr>
          </tbody></table></td>
        
      </tr>
</tbody>
</table>
</body>
</html>
    `;
const myScript = `
      document.body.style.backgroundColor = '#27277A';
      
      //document.querySelector("header").remove();
      //document.getElementById("real_estate_loan_amount_simulator-simulator").remove("");
     
      //document.querySelector(".wysiwyg-container").remove();
       document.querySelector("footer").remove();
      true; // note: this is required, or you'll sometimes get silent failures
    `;
const PolicyHTML = require('./../Poste.html');
class CovertisseurDevises extends React.Component {

    constructor(props) {
        super(props);
        this.state = {


        };
    }

    componentDidMount() {

    }


    render() {

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity style={{ marginTop: '0%', marginLeft: "5%" }}
                        onPress={() => { this.props.navigation.navigate('Acceuil') }}>
                        <Image
                            style={{
                                marginTop: '1%', marginRight: "0%",
                                width: 60, height: 60
                            }}
                            source={require('../Svg/b.png')} >
                        </Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.body}>

                    <WebView
                        originWhitelist={['*']}
                        source={{ html }}
                    />
                    {/* <WebView
                        source={PolicyHTML}
                        //source={{ html: '<iframe width="100%" height="100%" src="https://www.xe.com/fr/" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>' }}
                        /* source={{
                            uri: 'https://www.xe.com/fr/'
                        }} 
                        //useWebKit={true}
                        injectedJavaScript={myScript}
                    /> */}
                    {/* <WebView
                        //source={{ html: '<iframe width="100%" height="100%" src="https://adssettings.google.com/authenticated" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>' }}
                        source={{
                            uri: 'https://adssettings.google.com/authenticated'
                        }}
                        injectedJavaScript={myScript}
                        useWebKit={true}
                    /> */}

                </View>
                {/* <View style={styles.footer}>


                </View> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#27277A",
        flex: 1
    },
    header: {
        flex: 0,
    }, body: {
        // marginTop: '15%',
        flex: 3,
        //alignItems: "center",
        //justifyContent: "center"
        //backgroundColor: "red"

    },
    footer: {
        //backgroundColor: "red",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },


});


export default CovertisseurDevises;


