<?php require 'scripts.php' ?>
<html lang="en-US">
	<head>
		<meta charset="UTF-8">
		
		<title>Table sample</title>
		
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
		<link rel="stylesheet" href="css/main.css">
	</head>
	<body>
		<div class="container">
			<div class="row">
				<div class="col-xs-12">
					<table class="table js-score">
						<thead>
							<tr>
								<td>#</td>
								<td>p1</td>
								<td>p2</td>
								<td>p3</td>
								<td>p4</td>
								<td>p5</td>
								<td>total</td>
								<td>progression</td>
							</tr>
						</thead>
						<?php for($i=0; $i < 20; $i++): ?>
							<tr id="row_<?php echo $i ?>" class="js-score-row">
								<td><?php echo $i+1; ?></td>
								<?php 
									$rowTotal = 0;
								?>
								<?php for($j=0; $j < 5; $j++): ?>
									<?php 
										$pScore = ($j >= 4) ? '' : rand(10, 300); 
										$rowTotal += $pScore;
									?>
									<td class="js-pfield js-pfield-<?php echo $j ?>" data-p="<?php echo $j ?>" data-pscore="<?php echo $pScore ?>"><?php echo $pScore ?></td>
								<?php endfor; ?>
								<td><?php echo $rowTotal ?></td>
								<td class="js-score-progression">0</td>
							</tr>
						<?php endfor; ?>
					</table>
				</div>
			</div>
		</div>
		
		
		<!-- For dummy content only -->		
		<script src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
		<script src="js/main.js"></script>
	</body>
</html>