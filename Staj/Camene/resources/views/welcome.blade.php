<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="{{ asset('../css/app.css') }}" rel="stylesheet">
    <title>Laravel and React</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
    <link rel="stylesheet" type="text/css" charset="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
    <link rel="stylesheet" type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
    <!-- Load React first -->
    <script src="https://unpkg.com/react/dist/react.min.js"></script>
    <script src="https://unpkg.com/react-dom/dist/react-dom.min.js"></script>
    <!-- Will be exported to window.ReactInputMask -->
    <script src="https://unpkg.com/react-input-mask/dist/react-input-mask.min.js"></script>
</head>

<body class="antialiased">
    <div id="root"></div>
</body>
<script type="text/javascript" src="{{ mix('js/app.js') }}"></script>

</html>