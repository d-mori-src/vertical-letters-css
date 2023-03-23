<?php
    require_once('fvImages.php');
?>

<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./css/normalize.css">
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="./css/slide.css">
</head>
<body>
    <main>
        <section class="slider">
            <?php foreach ($fv_images as $fv_image):?>
                <div class="slickImg">
                    <div class="fvText <?=$fv_image['layout'];?> <?=$fv_image['color'];?>">
                        <h1><?=$fv_image['title'];?></h1>
                    </div>
                    <picture>
                        <source srcset="./img/top/<?=$fv_image['sp_image'];?>" media="(max-width: 767px)"/>
                        <img src="./img/top/<?=$fv_image['pc_image'];?>" alt="" />
                    </picture>
                    <div class="scroll">
                        <?php if ($fv_image['scroll_wh'] === true): ?>
                            <picture>
                                <source srcset="./img/common/sp-scroll_wh.svg" media="(max-width: 767px)"/>
                                <img src="./img/common/pc-scroll_wh.svg" alt="" />
                            </picture>
                        <?php else: ?>
                            <picture>
                                <source srcset="./img/common/sp-scroll.svg" media="(max-width: 767px)"/>
                                <img src="./img/common/pc-scroll.svg" alt="" />
                            </picture>
                        <?php endif; ?>
                    </div>
                </div>
            <?php endforeach; ?>
        </section>
    </main>

    <script src="./js/jquery.3.4.1.js"></script>
    <script src="./js/main.js"></script>
    <link href="./js/slick-theme.css" rel="stylesheet" type="text/css">
    <link href="./js/slick.css" rel="stylesheet" type="text/css">
    <script type="text/javascript" src="./js/slick.min.js"></script>
</body>
</html>