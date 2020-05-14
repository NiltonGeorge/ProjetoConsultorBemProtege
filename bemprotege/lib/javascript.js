(function readyJS(win,doc){
    
    function getRoot()
    {
        return win.location.protocol+"//"+doc.location.hostname+"/";
    }


    function ajaxFunction(action,brandId="",vehicleId="",yearId="")
    {
         $.ajax({
            url: getRoot()+"bem-protege/controller/controllerFipe.php?action="+action+brandId+vehicleId+yearId+"",
            type: "post",
            dataType: "json",
            success: function(response){
                const responseJson=JSON.parse(response);
                for (let i = 0; i < responseJson.length; i++) {
                    $("#"+action).append("<option value='"+responseJson[i].id+"'>"+responseJson[i].name+"</option>");
                }
                
            }
        });
    }
/*
    function ajaxFunctionPreco(action,brandId="",vehicleId="")
    {
         $.ajax({
            url: getRoot()+"bem-protege/controller/controllerFipe.php?action="+action+brandId+vehicleId+"",
            type: "post",
            dataType: "json",
            success: function(response){
                const responseJson=JSON.parse(response);
                $("#"+action).append("<option >"+responseJson.preco+"</option>");
                
            }
        });
    }
 */


    function getBrand()
    {
       ajaxFunction("brand");
       //ajaxFunctionPreco("brand")
       $("#brand").on("change", function(){
        $("#vehicles").show();
        getVehicles($(this).val());
       });
    }

    function getVehicles(brandId)
    {
        ajaxFunction("vehicles","&brandId="+brandId);
        //ajaxFunctionPreco("vehicles","&brandId="+brandId);
        $("#vehicles").on("change", function(){
        $("#year").show();
            getYear(brandId,$(this).val());            
       });
    }

    function getYear(brandId,vehicleId)
    {
       ajaxFunction("year","&brandId="+brandId,"&vehicleId="+vehicleId);
       //ajaxFunctionPreco("year","&brandId="+brandId,"&vehicleId="+vehicleId);
       $("#year").on("change", function(){
        $("#preco").show();
            getPreco(brandId,vehicleId,$(this).val());            
       });
    }   

    function getPreco(brandId,vehicleId,yearId)
    {
       //ajaxFunctionPreco("&brandId="+brandId,"&vehicleId="+vehicleId,"&yearId="+yearId);       
    }   

   
 
    getBrand();
   

})(window,document);