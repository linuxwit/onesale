define(['controllers/module'], function(mod) {
    mod.controller('CourseCtrl', ['$scope', '$http', '$q',
        function($scope, $http, $q) {
            $scope.totalItems = 16;
            $scope.currentPage = 1
            $scope.setPage = function(pageNo) {
                $scope.currentPage = pageNo;
            };
            $scope.pageChanged = function() {
                console.log('Page changed to: ' + $scope.currentPage);
            };
            $scope.maxSize = 5;
           // $scope.bigTotalItems = 175;
          //  $scope.bigCurrentPage = 1;


            $scope.course = {
                title: "Instagram 创始人分享创业经验",
                cover: "images/demo/course.jpg",
                summary: "Instagram的合伙创始人Kevin Systrom和Mike Krieger谈如何面对创业公司和创业人身边的种种谜团的挑战。Systrom和Krieger还谈到了如何平衡合伙创始人之间的关系以及如何平衡工作与生活。",
                teacher: {
                    name: "蒂姆",
                    summary: "曾在IBM供职12 年，负责PC部门在北美和拉美的制造和分销运作。1998 年年初进入苹果，任副总裁，主管苹果的电脑制造业务。2011年8月25日，苹果宣布史蒂夫·乔布斯(Steve Jobs)将辞去CEO一职，由蒂姆·库克（Tim Cook）接任"
                }
            }
            $scope.courses = [{
                title: "Instagram 创始人分享创业经验",
                cover: "images/demo/course.jpg",
                createDate: "2014.10.04",
                studentCount: 12
            }, {
                title: "Instagram 创始人分享创业经验",
                cover: "images/demo/course.jpg",
                createDate: "2014.10.04",
                studentCount: 12
            }, {
                title: "Instagram 创始人分享创业经验",
                cover: "images/demo/course.jpg",
                createDate: "2014.10.04",
                studentCount: 12
            }, {
                title: "Instagram 创始人分享创业经验",
                cover: "images/demo/course.jpg",
                createDate: "2014.10.04",
                studentCount: 12
            }, {
                title: "Instagram 创始人分享创业经验",
                cover: "images/demo/course.jpg",
                createDate: "2014.10.04",
                studentCount: 12
            }, {
                title: "Instagram 创始人分享创业经验",
                cover: "images/demo/course.jpg",
                createDate: "2014.10.04",
                studentCount: 12
            }, {
                title: "Instagram 创始人分享创业经验",
                cover: "images/demo/course.jpg",
                createDate: "2014.10.04",
                studentCount: 12
            }, {
                title: "Instagram 创始人分享创业经验",
                cover: "images/demo/course.jpg",
                createDate: "2014.10.04",
                studentCount: 12
            }];
            $scope.openStart = function($event) {
                $event.preventDefault();
                $event.stopPropagation();
                $scope.startOpened = true;
            };
            $scope.today = function() {
                $scope.startDate = new Date();
                $scope.endDate = $scope.startDate;
            };
            $scope.openEnd = function($event) {
                $event.preventDefault();
                $event.stopPropagation();
                $scope.endOpened = true;
            };
            $scope.stopDatepicker = function($event) {
                $event.preventDefault();
                $event.stopPropagation();
                $scope.stopOpened = true;
            };
        }
    ]);
});