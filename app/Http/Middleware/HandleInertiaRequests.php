<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use Tighten\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
                'id' => auth()->id(),
                'check' => auth()->check(),
            ],
            'ziggy' => fn () => [
                ...(new Ziggy)->toArray(),
                'location' => $request->url(),
            ],
            'lang' => app()->currentLocale(),
            'isEn' => app()->isLocale('en'),
            'langRoute' =>  app()->isLocale('ar') ?  $request->url().'?locale='.'en' : $request->url().'?locale='.'ar'  ,
            'routeName' => $request->route() ? $request->route()->getName() : null,
            'routeUrl' => $request->url(),
        ];
    }
}