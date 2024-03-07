<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Symfony\Component\HttpFoundation\Response;

class Lang
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if ($request->has('locale') && in_array($request->locale, ['ar','en'])) {
            session()->put('locale', $request->locale);
        } 
        $locale = session()->get('locale') ?? 'en';
        if (in_array($locale, ['ar','en']) && App::currentLocale() != $locale) {
            App::setLocale($locale);
        } 
        return $next($request);
    }
}
