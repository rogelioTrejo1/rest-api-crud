<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Prospect extends Model
{
    protected $table = 'prospects';
    protected $fillable = ['fullname', 'email', 'phone', 'message', 'whatssapp_comunication', 'communication'];
}
