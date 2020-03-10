<?php

namespace App;

use App\Scopes\ReverseScope;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    /**
     * The attributes that aren't mass assignable.
     *
     * @var array
     */
    protected $guarded = [];

    protected static function boot() {
        parent::boot();

        static::addGlobalScope((new ReverseScope()));
    }

    public function user() {
        return $this->belongsTo(User::class);
    }
}
