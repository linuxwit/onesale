define(['controllers/module'], function(mod) {
    mod.controller('TeacherCtrl', ['$scope', '$http', '$q',
        function($scope, $http, $q) {
            $scope.totalItems = 18
            $scope.currentPage = 1
            $scope.setPage = function(pageNo) {
                $scope.currentPage = pageNo;
            };
            $scope.pageChanged = function() {
                console.log('Page changed to: ' + $scope.currentPage);
            };
            $scope.maxSize = 5;
            $scope.teachers = [{
                name: "安东尼罗宾",
                title: "潜能激发大师",
                mobile: "18712345678",
                avatar: "images/demo/teacher.jpg",
                company: "xx集团"
            }, {
                name: "安东尼罗宾",
                title: "潜能激发大师",
                mobile: "18712345678",
                avatar: "images/demo/teacher.jpg",
                company: "xx集团",
                summary: "擅于激发人的潜能"
            }, {
                name: "安东尼罗宾",
                title: "潜能激发大师",
                mobile: "18712345678",
                avatar: "images/demo/teacher.jpg",
                company: "xx集团",
                summary: "擅于激发人的潜能"
            }, {
                name: "安东尼罗宾",
                title: "潜能激发大师",
                mobile: "18712345678",
                avatar: "images/demo/teacher.jpg",
                company: "xx集团",
                summary: "擅于激发人的潜能"
            }, {
                name: "安东尼罗宾",
                title: "潜能激发大师",
                mobile: "18712345678",
                avatar: "images/demo/teacher.jpg",
                company: "xx集团"
            }, {
                name: "安东尼罗宾",
                title: "潜能激发大师",
                mobile: "18712345678",
                avatar: "images/demo/teacher.jpg",
                company: "xx集团"
            }, {
                name: "安东尼罗宾",
                title: "潜能激发大师",
                mobile: "18712345678",
                avatar: "images/demo/teacher.jpg",
                company: "xx集团"
            }, {
                name: "安东尼罗宾",
                title: "潜能激发大师",
                mobile: "18712345678",
                avatar: "images/demo/teacher.jpg",
                company: "xx集团"
            }, {
                name: "安东尼罗宾",
                title: "潜能激发大师",
                mobile: "18712345678",
                avatar: "images/demo/teacher.jpg",
                company: "xx集团"
            }];
        }
    ])
});