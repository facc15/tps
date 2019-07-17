/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var lamparas;
    var marca;
    var preciodescuento;

    lamparas=document.getElementById("Cantidad").value;
    marca=document.getElementById("Marca").value;
   

    lamparas=parseInt(lamparas);  

    if(lamparas>=6)
    {
        document.getElementById("precioDescuento").value=35*lamparas*(50/100);
        document.getElementById("precioDescuento").value=preciodescuento;
    }else
    {   
        if(lamparas==5 && marca=="ArgentinaLuz")
        {
            document.getElementById("precioDescuento").value=35*lamparas*(40/100);
        }else
        {
            if(lamparas==5) 
            {
                document.getElementById("precioDescuento").value=35*lamparas*(30/100);
            }

        }
    }    
    {
        if(lamparas==4 && marca=="ArgentinaLuz")
        {
            document.getElementById("precioDescuento").value=35*lamparas*(25/100);  
        }else
        {
            if(lamparas==4 && marca== "FelipeLamparas")
            {
                document.getElementById("precioDescuento").value=35*lamparas*(25/100);
            }else
            {
                if(lamparas==4)
                {
                    document.getElementById("precioDescuento").value=35*lamparas*(20/100);
                }
            }
        }
    {   
        if(lamparas==3 && marca=="ArgentinaLuz")
        {
            document.getElementById("precioDescuento").value=35*lamparas*(15/100);
        }else
        {
            if(lamparas==3 && marca=="FelipeLamparas")
            {
                document.getElementById("precioDescuento").value=35*lamparas*(10/100);
            }else
            {
                if(lamparas==3)
                {
                    document.getElementById("precioDescuento").value=35*lamparas*(5/100); 
                }   
            }
        }
        {
            if(preciodescuento>120)
            {
                document.getElementById("precioDescuento").value=document.getElementById("precioDescuento").value+10/100; 
                alert("usted pagó" + " " + document.getElementById("precioDescuento").value);
            }

        }

        }
    }     
}
