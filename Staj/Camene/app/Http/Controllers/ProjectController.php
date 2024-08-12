<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Project;
use App\PlansImage;


class ProjectController extends Controller
{

    public function getProjects(Request $request)
    {
        $acceptLanguage = $request->header('Accept-Language');
        $languageCode = explode(',', $acceptLanguage)[0];
        $languageCode = explode('-', $languageCode)[0];

        $projects = Project::orderBy('created_at', 'ASC')->withTranslations($languageCode)->get();
        $projects = $projects->translate($languageCode);
        $projects->map(function ($item) {

            if ($item->images != null) {
                $item->images = json_decode($item->images);
                $image_gallery = $item->images;
                for ($i = 0; $i < count($image_gallery); $i++) {

                    $image_gallery[$i] = [
                        "url" => url(
                            sprintf('storage/%s', str_replace('\\', '/', $image_gallery[$i]))
                        ),
                        "index" => $i + 1 // Index 0'dan değil 1'den başlamalı
                    ];
                    $item->images = $image_gallery;
                }
                $item->image = url(
                    sprintf('storage/%s', str_replace('\\', '/', $item->image))
                );

            }
        });
        return response()->json($projects);
    }
    public function getByProject(Request $request, $slug)
    {
        $acceptLanguage = $request->header('Accept-Language');
        $languageCode = explode(',', $acceptLanguage)[0];
        $languageCode = explode('-', $languageCode)[0];

        $projects = Project::where('slug', $slug)->withTranslations($languageCode)->first();
        $projects = $projects->translate($languageCode);


        if ($projects->images != null) {
            $projects->images = json_decode($projects->images);
            $image_gallery = $projects->images;
            for ($i = 0; $i < count($image_gallery); $i++) {

                $image_gallery[$i] = [
                    "url" => url(
                        sprintf('storage/%s', str_replace('\\', '/', $image_gallery[$i]))
                    ),
                    "index" => $i + 1 // Index 0'dan değil 1'den başlamalı
                ];
                $projects->images = $image_gallery;
            }
            $projects->image = url(
                sprintf('storage/%s', str_replace('\\', '/', $projects->image))
            );

        }

        return response()->json($projects);
    }

    public function getPlans()
    {
        $plans = PlansImage::get();
        foreach ($plans as $key => $value) {
            $value->images = url(
                sprintf('storage/%s', str_replace('\\', '/', $value->images))
            );
        }
        return response()->json($plans);
    }
}