<!DOCTYPE HTML>
<html>
	<head>
		<meta charset="utf-8" >
		<meta name="author" content="Florentin Garnier">
		<meta name="contact" content="garnier.florentin@gmail.com" >
		<title>EasyMEL</title>
		<link href="stylesheet.css" rel="stylesheet" />
	</head>
	<body>
		
	    <div id=container>
	      <header>
		<h1>EasyMEL</h1>
		<h2>Actual time  <?php echo gmdate('d-M-y H:i');?> UTC</h2>
	      </header>
		    
		    <div id=banner>
		      <div id=intro>
		   
			<p>EasyMEL is a tool for helping aircraft licenced maintenance engineer to MEL proposal.<br/><strong>This tool don't supressed official aircraft documentation.</strong></p>
		      </div>
		    </div>
		    

		    <section class="categorie">
			    <h2>Cat B (3 days)</h2>
			    <h2>Deadline <?php echo gmdate('d-M-y', strtotime('+3 days'));?> 23:59 UTC</h2>
		    </section>

		    <section class="categorie">
			    <h2>Cat C (10 days)</h2>
			    <h2>Deadline <?php echo gmdate('d-M-y', strtotime('+10 days'));?> 23:59 UTC</h2>
		    </section>

		    <section class="categorie">
			    <h2>Cat D (120 days)</h2>
			    <h2>Deadline <?php echo gmdate('d-M-y', strtotime('+120 days'));?> 23:59 UTC</h2>
		    </section>
		</div>

	</body>
</html>
