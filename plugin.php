<?php

/**
 * Plugin Name: Kensaku
 * Author: Guido Scialfa
 * Description: The WordPress plugin to develop the Kensaku entities search library.
 * Author URI: https://guidoscialfa.com/
 */

declare(strict_types=1);

namespace SpaghettiDojo\Kensaku;

use Inpsyde\Modularity;
use SpaghettiDojo\Kensaku;

function package(): Modularity\Package
{
    /** @var Modularity\Package|null $package */
    static $package = null;

    $projectRoot = __DIR__;

    function autoload(string $projectRoot): void
    {
        $autoloadFile = "{$projectRoot}/vendor/autoload.php";
        if (!\is_readable($autoloadFile)) {
            return;
        }
        /** @psalm-suppress UnresolvableInclude */
        require_once $autoloadFile;
    }

    if (!$package) {
        autoload($projectRoot);
        $package = Kensaku\Library::new(\plugin_dir_url(__FILE__))->package();
    }

    return $package;
}

\add_action(
    'plugins_loaded',
    fn() => package()
        ->addModule(Kensaku\Modules\E2e\Module::new())
        ->boot()
);
