<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/', function () {
    return Inertia::render('MasterLayoutAuth');
});

Route::get('/admin/dashboard', function () {
    return Inertia::render('DashboardAdmin');
});

Route::get('/admin/profile', function () {
    return Inertia::render('Profile');
});

Route::get('/admin/siswa', function () {
    return Inertia::render('Siswa');
});

Route::get('/admin/admin', function () {
    return Inertia::render('Admin');
});

Route::get('/admin/buku', function () {
    return Inertia::render('Buku');
});

Route::get('/admin/peminjaman', function () {
    return Inertia::render('Peminjaman');
});

Route::get('/admin/pengembalian', function () {
    return Inertia::render('Pengembalian');
});

Route::get('/admin/riwayat', function () {
    return Inertia::render('Riwayat');
});

Route::get('/admin/tentangaplikasi', function () {
    return Inertia::render('TentangAplikasi');
});

Route::get('/admin/pelayananpelanggan', function () {
    return Inertia::render('PelayananPelanggan');
});


// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/admin/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/admin/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/admin/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

require __DIR__.'/auth.php';
