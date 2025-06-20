<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    protected $fillable = ['fullname', 'prefix', 'phone', 'email', 'text'];
}
