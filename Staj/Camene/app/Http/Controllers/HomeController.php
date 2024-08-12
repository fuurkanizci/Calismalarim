<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\HomeSlider;
use App\ImageGallery;

class HomeController extends Controller
{
    public function getHomeSlider()
    {
        $sliders = HomeSlider::orderBy('order', 'asc')->get();

        foreach ($sliders as $key => $slider) {
            $slider->image = url(
                sprintf('storage/%s', str_replace('\\', '/', $slider->image))
            );
        }
        return response()->json($sliders);
    }
    public function getGalleries()
    {
        $imageGallery = ImageGallery::get();

        foreach ($imageGallery as $key => $item) {
            $images = json_decode($item->images);

            $newArray = [];
            foreach ($images as $key => $image) {
                $newArray[$key] = url(
                    sprintf('storage/%s', str_replace('\\', '/', $image))
                );
            }
            $item->images = $newArray;
        }
        return response()->json($imageGallery);
    }
}