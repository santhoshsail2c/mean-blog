(function () {
	angular
		.module("BlogApp",[])
		.controller("BlogController", BlogController);

	function BlogController($scope,$http){
		$scope.createPost=createPost;
		$scope.deleteAllPost=deleteAllPost;
		$scope.deletePost=deletePost;


		function init(){
		
			getAllPosts();
		
		}

		init();

		function deleteAllPost(allPostId){
			$http
				.delete("/api/blogpost/"+allPostId);
		
		}

		function deletePost(postId){
			$http
				.delete("/api/blogpost/" +postId)
				.success(getAllPosts);
		}

		
		function getAllPosts(){
			$http
				.get("/api/blogpost")
				.success(function(posts){
					$scope.posts = posts;
				});
		}

		function createPost(post){
			console.log(post);
			$http
				.post("/api/blogpost",post)
				.success(getAllPosts);

		}

	}


})();