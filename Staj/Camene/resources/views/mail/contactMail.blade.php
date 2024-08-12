<html>

<head>
    <title>İletişim Formu</title>
    <style>
        .email-table {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            font-family: Arial, sans-serif;
            border-collapse: collapse;
            border: 1px solid #CCCCCC;
            border-radius: 5px;
        }

        .email-table th,
        .email-table td {
            padding: 10px;
            border-bottom: 1px solid #CCCCCC;
        }

        .email-table th {
            background-color: #f2f2f2;
            font-weight: bold;
            text-align: left;
        }

        .email-table td {
            background-color: #ffffff;
        }
    </style>
</head>

<body>
    <table class="email-table">
        <tr>
            <th>Ad Soyad</th>
            <td>{{$data['fullname']}} </td>
        </tr>
        <tr>
            <th>Telefon</th>
            <td>{{$data['phone']}}</td>
        </tr>
        <tr>
            <th>E-Mail</th>
            <td>{{$data['mail']}}</td>
        </tr>
        <tr>
            <th>Mesaj</th>
            <td>{{$data['message']}}</td>
        </tr>
    </table>
</body>

</html>