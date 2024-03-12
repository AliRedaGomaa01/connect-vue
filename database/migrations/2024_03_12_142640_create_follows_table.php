<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('follows', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            # Relations
            $table->foreignId('followed_id')->constrained('users', 'id')->cascadeOnDelete(); // user who is followed
            $table->foreignId('following_id')->constrained('users', 'id')->cascadeOnDelete(); // user who is following
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('follows');
    }
};
