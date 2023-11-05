<script lang="ts">
    import { AppBar, AppShell } from '@skeletonlabs/skeleton'

    import '../app.postcss'
</script>

<AppShell>
    <svelte:fragment slot="header">
        <div class="shadow-lg bg-surface-800">
            <AppBar class="!p-2 max-w-screen-lg mx-auto">
                <svelte:fragment slot="lead"
                    ><h2 class="font-bold">Recognise</h2></svelte:fragment
                >

                <svelte:fragment slot="trail">
                    <!-- IDEA: show minidenticon for the user id: https://github.com/laurentpayot/minidenticons -->
                    <div class="bg-surface-100 rounded-full w-8 h-8" />
                </svelte:fragment>
            </AppBar>
        </div>
    </svelte:fragment>

    <slot />
</AppShell>
