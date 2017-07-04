/**
 * Created by Administrator on 2017/5/3.
 */

angular.module('app')
    .run(function($rootScope,$http){
        $http.get("data/data.json")
            .success(function(data){
                $rootScope.data = data;
            })
    })
    .directive("footList",function(){
        return{
            restrict:"ACEM",
            templateUrl:"page/footlist.html",
            controller:function($scope,$http){
                $scope.fun = function(index){
                    var list = document.getElementById('list'),
                        li = list.getElementsByTagName('li');
                    console.log(li);
                    for(var i=0;i<li.length;i++){
                        li[i].className +=""
                    }
                    li[index].className +=" on";
                    $http.get("data/data.json")
                        .success(function(data){
                            $scope.data = data;
                            $scope.prodect = data[index].prodect
                        })
                };
                $scope.check=function(index){
                    var cks=document.getElementById('check'),
                        bs=cks.getElementsByTagName('b'),
                        count=document.getElementById("count");
                    if(bs[index].className=="on"){
                        bs[index].className=" "
                    }else{
                        bs[index].className="on"
                    }
                    var len=cks.getElementsByClassName('on').length;
                    count.innerHTML=len;
                }
            }

        }
    });
