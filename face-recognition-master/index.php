<!DOCTYPE HTML>
<html lang="en-US">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Face Detection</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
    <script src="js/jquery.facedetection.js"></script> 
	<script src="js/script.js"></script>
	<style type="text/css">
		.container{
			box-shadow: 0 0 5px 0 rgba(0,0,0,0.05);
			margin: 30px auto;
			padding: 15px;
			border-top: 2px solid tomato;
		}
		.img-container{
			position: relative;
		}
		.jumbotron{
			margin: 30px 0 50px;		
		}
		.jumbotron form input{
			display: inline-block;
		}
		.img-container img{
			width: 100%;
			height: auto;
		}
		.face-frame{
			border: 5px solid #fff;
			border-radius: 2px;
			box-shadow: 0 0 5px 0 rgba(0,0,0,0.2)
			position: absolute;
			transition: all ease-in-out .5s;
			transform: scale(0,0);
		}
	</style>
</head>
<body>
	<div class="container">	
		<div class="text-center">	
		<?php
			$uploadOk = 0;
			if(isset($_FILES['image'])){
				$errors= array();
				$file_name = $_FILES['image']['name'];
				$file_size =$_FILES['image']['size'];
				$file_tmp =$_FILES['image']['tmp_name'];
				$file_type=$_FILES['image']['type'];
				$file_ext=strtolower(end(explode('.',$_FILES['image']['name'])));

				$extensions= array("jpeg","jpg","png");

				if(in_array($file_ext,$extensions)=== false){
				 $errors[]="extension not allowed, please choose a JPEG or PNG file.";
				}

				if($file_size > 2097152){
				 $errors[]='File size must be excately 2 MB';
				}

				if(empty($errors)==true){
				 move_uploaded_file($file_tmp,"img/".$file_name);
				}
				
				if(empty($errors)==true){
					echo "
						<div class='alert alert-success fade in'>
						<a href='#' class='close' data-dismiss='alert' aria-label='alert'>&times;</a> Success</div>
					";
					$uploadOk = 1;
				}else{ ?>
					<div class='alert alert-danger'> <?php print_r($errors[0]); ?></div>
					<?php $uploadOk = 0;
				}
		   }
		?> 
		</div>
		<div class="jumbotron text-center">
			<form action="index.php" method="post" enctype="multipart/form-data">
				Select image to upload:
				<div class="form-group row">			
					<div class="col-sm-10">
						<input type="file" name="image" id="fileToUpload" class="form-control">
					</div>
					<div class="col-sm-2">
						<input type="submit" value="Upload Image" name="submit" class="btn btn-primary">
					</div>
				</div>
			</form>
		</div>
		<?php
			if($uploadOk == 1){ ?>				
				<div class="img-container">
					<img src="img/<?php echo basename( $_FILES["image"]["name"]); ?>" alt="img" id="myImage"/>
				</div>
		<?php }
		?>
	</div>
</body>
</html>