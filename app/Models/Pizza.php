<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;


class Pizza extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $guarded = [];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'toppings' => 'array',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'user',
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = [
        'chef',
        'last_updated'
    ];

    /**
     * Get the user that owns the pizza.
     *
     * @return BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the chef's name for the pizza.
     *
     * @return string
     */
    public function getChefAttribute(): string
    {
        return $this->user->name;
    }

    /**
     * Get the last updated attribute for the pizza.
     *
     * @return string
     */
    public function getLastUpdatedAttribute(): string
    {
        return $this->updated_at->diffForHumans();
    }
}
