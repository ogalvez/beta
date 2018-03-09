<?php

class PDOHandler extends PDO{

	 public function __construct($file,$database_alias)
    {
    	$settings = parse_ini_file($file, TRUE);
        if (!$settings) throw new exception('Unable to open ' . $file . '.');
        $dsn = $settings[$database_alias]['driver'] .
        ':host=' . $settings[$database_alias]['host'] .
        ((!empty($settings[$database_alias]['port'])) ? (';port=' . $settings[$database_alias]['port']) : '') .
        ';dbname=' . $settings[$database_alias]['schema'];
        parent::__construct($dsn, $settings[$database_alias]['username'], $settings[$database_alias]['password']);
    }

}

?>