function myname(){
    let zakatCamal=document.getElementById('camal').value;
    let result;


        if(zakatCamal>=400){
        result="آٹھ حقے"
        } else if(zakatCamal>=396){
        result="آٹھ حقے"
       }  else if(zakatCamal>=386){
        result="سات حقے اور ایک بنت لبون"
        } else if(zakatCamal>=375){
        result="سات حقے اور ایک بنت مخاض"
       } else if(zakatCamal>=370){
       result="سات حقے چار بکریاں"
      }else if(zakatCamal>=365){
       result="سات حقے اور تین بکریاں"
      }  else if(zakatCamal>=360){
          result="سات حقے اور دو بکریاں"
      } else if(zakatCamal>=355){
       result="سات حقے اور ایک بکری"
       } else if(zakatCamal>=346){
       result="سات حقے"
      } else if(zakatCamal>=339){
       result="چھے حقے اور ایک بنت لبوون"
     } else if(zakatCamal>=325){
      result="چھے حقے اور ایک بنت مخاض"
    } else  if(zakatCamal>=320){
      result="چھے حقے اور چار بکریاں"
     } else if (zakatCamal>=315){
     result="چھے حقے اور تین بکریاں"
      } else if(zakatCamal>=310){
    result="چھے حقے اور دو بکریاں"
     } else if(zakatCamal>=305){
     result="چھے حقے اور ای بکری"
     }else if(zakatCamal>=296){
       result="چھے حقے "
     } else  if(zakatCamal>=286){
     result="پانچ حقے اور ایک بنت لبون"
     }else if(zakatCamal>=275){
     result="پانچ حقے بنت مخاض"
     }  else if(zakatCamal>=270){
       result="پانچ حقے اور چار بکریاں"
     } else if(zakatCamal>=265){
     result="پانچ حقے تین بکریاں"
     }  else if(zakatCamal>=260){
     result="پانچ حقے  دو بکریاں"
    }else if(zakatCamal>=255){
   result="پانچ حقے اور ایک بکری"
    } else if(zakatCamal>=246){
    result="پانچ حقے"
   } else if(zakatCamal>=236){
    result="چار حقے اور ایک بنت لبون"
    }else if(zakatCamal>=225){
     result="چار حقے اور ایک بنت مخاض"
    }else if(zakatCamal>=220){
    result="چار حقے اور چار بکریاں"
   } else if(zakatCamal>=215){
    result="چار حقے اور تین بکریاں"
   } else if(zakatCamal>=210){
     result="چار حقے اور دو بکریاں"
   }else if(zakatCamal>=205){
    result="چار حقے اور بکری"
   } else if(zakatCamal>=196){
   result="چار حقے یا پانچ بنت لبون"
   }else if(zakatCamal>=186){
   result="تین حقے اور ایک بنت لبون"
   } else if(zakatCamal>=175){
   result="تین حقے اور ایک بنت مخاض"
   }else if(zakatCamal>=170){
   result="تین حقے اور چار بکریاں"
   }else if(zakatCamal>=165){
    result="تین حقے اور تین بکریاں"
    } else if(zakatCamal>=160){
    result="تین حقے اور دو بکریاں"
    } else if (zakatCamal>=155){
      result="تین حقے اور ایک بکری";
    }else if (zakatCamal>=150){
       result="تین حقے"
    }else if (zakatCamal>=145){
         result="دو حقے اور ساتھ ایک بنت لبون";
    }else if(zakatCamal>=140){
         result="دو حقے اور چار بکریاں ";
    }else if(zakatCamal>=135){
         result="دو حقے تین بکریاں ";
    }else if(zakatCamal>=130){
         result="دو حقے دو بکریاں ";
    }else if(zakatCamal>=125){
         result="دو حقے ایک بکری ";
    }else if(zakatCamal>=120){
         result="دو حقے ";
    }else if(zakatCamal>=91){
         result="دو حقے  ";   
    }else if(zakatCamal>=76){
         result="دو بنت لبون ";
    }else if(zakatCamal>=61)
    {
         result="ایک جزعہ";
    }else if (zakatCamal>=46)
    {
         result="ایک حقہ";
    }else if (zakatCamal>=36){
         result="دو بنت  لبون";
    }else if(zakatCamal>=26){
         result="دو بنت مخاض";
    }else if (zakatCamal>=20){
         result="چار بکریاں  ";
    } 
    else if(zakatCamal>=15){
         result="تین بکریاں";
    }else if(zakatCamal>=10){
         result="دو بکریاں";
    }else if (zakatCamal>=5){
         result="ایک بکری"; 
    }else{
         result="اس میں زکاۃ نہیں ہے";
    }
      document.getElementById('head').innerText=result;
}